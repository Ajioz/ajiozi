import { connectDB } from "@/utils/connectDB";
import { ObjectId } from "mongodb";
import Cors from "cors";

export const insertDoc = async (client, collection, doc) => {
  const db = client.db();
  return await db.collection(collection).insertOne(doc);
};

export const getAllDocs = async (client, collection, sort, filter) => {
  const db = client.db();
  return await db.collection(collection).find(filter).sort(sort).toArray();
};

export const getOneDoc = async (client, collection, target) => {
  const db = client.db();
  return await db.collection(collection).findOne({ _id: ObjectId(target) });
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  origin: '*', // Allow all origins or specify your frontend URL
});

// Helper method to run middleware
const runMiddleware = (req, res, fn) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });

const messageHandler = async (req, res) => {
  let client;

  // Run CORS middleware
  await runMiddleware(req, res, cors);

  try {
    client = await connectDB();

    switch (req.method) {
      case "POST":
        try {
          const { name, email, subject, phone, message } = req.body;

          if (!isValidEmail(email)) {
            return res
              .status(422)
              .json({ status: false, message: "Invalid email" });
          }

          if (!name?.trim() || !message?.trim()) {
            return res
              .status(422)
              .json({ status: false, message: "Invalid input" });
          }

          const newMessage = {
            email,
            name,
            subject,
            phone,
            message,
            isRead: false,
            createdAt: new Date(),
          };

          await insertDoc(client, "message", newMessage);

          return res.status(201).json({
            message: "Message saved successfully!",
            newMessage,
            status: true,
          });
        } catch (error) {
          console.error("Error processing POST request:", error);
          return res
            .status(500)
            .json({ message: "Failed to send message", status: false });
        }

      case "GET":
        try {
          const { id } = req.query; // Use req.query for GET parameters
          if (!id) {
            const docs = await getAllDocs(
              client,
              "message",
              { createdAt: -1 },
              {}
            );
            return res.status(200).json(docs);
          } else {
            const msg = await getOneDoc(client, "message", id);
            if (!msg) {
              return res
                .status(404)
                .json({ message: `No message with id: ${id} exists` });
            }
            return res.status(200).json({ message: msg });
          }
        } catch (error) {
          console.error("Error processing GET request:", error);
          return res
            .status(500)
            .json({ message: "Failed to retrieve messages", status: false });
        }

      case "PATCH":
        try {
          const { id } = req.body;
          const objectId = new ObjectId(id);

          const message = await client
            .db()
            .collection("message")
            .findOne({ _id: objectId });

          if (!message) {
            return res.status(404).json({ message: "No such message" });
          }

          const updateResult = await client
            .db()
            .collection("message")
            .updateOne({ _id: objectId }, { $set: { isRead: true } });

          if (updateResult.modifiedCount > 0) {
            return res.status(200).json({ message: "Updated successfully" });
          } else {
            return res
              .status(400)
              .json({ message: "Update failed or no changes made" });
          }
        } catch (error) {
          console.error("Error updating message:", error);
          return res
            .status(500)
            .json({ message: "Error updating message", status: false });
        }

      case "DELETE":
        try {
          const { id: deleteId } = req.body;
          const objectId = new ObjectId(deleteId);
          const deleteResult = await client
            .db()
            .collection("message")
            .deleteOne({ _id: objectId });

          if (deleteResult.deletedCount === 0) {
            return res
              .status(404)
              .json({ message: "No such message or already deleted" });
          }

          return res
            .status(200)
            .json({ message: "Successfully deleted message" });
        } catch (error) {
          console.error("Error deleting message:", error);
          return res
            .status(500)
            .json({ message: "Error deleting message", status: false });
        }

      default:
        return res
          .status(405)
          .json({ message: "Method not allowed", status: false });
    }
  } catch (error) {
    console.error(`Error in ${req.method} operation:`, error);
    return res
      .status(500)
      .json({ message: `Error during ${req.method} operation`, status: false });
  } finally {
    if (client) client.close();
  }
};

export default messageHandler;
