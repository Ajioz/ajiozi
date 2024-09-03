import { connectDB } from "@/utils/connectDB";

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
  return await db.collection(collection).find({ target });
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const messageHandler = async (req, res) => {
  let client;

  if (req.method === "POST") {
    try {
      client = await connectDB();
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      return res.status(500).json({ message: "Database server error" });
    }

    try {
      const { name, email, subject, phone, message } = req.body;

      if (!isValidEmail(email)) {
        return res
          .status(422)
          .json({ status: false, message: "Invalid email" });
      }

      if (!name || name.trim() === "" || !message || message.trim() === "") {
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
      };

      const result = await insertDoc(client, "message", newMessage);
      newMessage.id = result._id;

      return res.status(201).json({
        message: "Message saved successfully!",
        newMessage,
        status: true,
      });
    } catch (error) {
      console.error("Error processing request:", error);
      return res
        .status(500)
        .json({ message: "Failed to send message", status: false });
    } finally {
      client.close(); // Ensure the client is closed after the operations
    }
  } else if (req.method === "GET") {
    let client;

    try {
      client = await connectDB();
      const { id } = req.body;

      if (id === undefined) {
        const docs = getAllDocs(client, "message", { _id: -1 }, {});
        return res.status(200).json({ docs });
      } else {
        const msg = await getOneDoc(client, "message", id);
        if (!msg) {
          return res
            .status(422)
            .json({ message: `No message with id: ${id} exists` });
        }
        return res.status(200).json({ message: msg });
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      return res
        .status(500)
        .json({ message: "Error fetching messages", status: false });
    } finally {
      client.close(); // Ensure the client is closed after the operations
    }
  } else if (req.method === "PATCH") {
    let client;

    try {
      client = await connectDB();
      const { id } = req.body;
      const db = client.db();
      const message = await db.collection("message").findOne({ _id: id });

      if (!message) {
        return res.status(404).json({ message: "No such message" });
      }

      const updateMsg = await db
        .collection("message")
        .updateOne({ _id: id }, { $set: { isRead: true } });

      if (updateMsg) {
        return res.status(201).json({ message: "Updated successfully" });
      }
    } catch (error) {
      console.error("Error updating message:", error);
      return res
        .status(500)
        .json({ message: "Error updating message", status: false });
    } finally {
      client.close(); // Ensure the client is closed after the operations
    }
  }
  
  else if (req.method === "DELETE") {
    let client;
  
    try {
      client = await connectDB();
      const { id } = req.body;
      const deleteMsg = await client.db().collection("message").deleteOne({ _id: id });

      if (!deleteMsg) {
        return res.status(422).json({ message: "Could not delete message" });
      }

      return res.status(200).json({ message: "Successfully deleted message" });
      
    } catch (error) {
      console.error("Error updating message:", error);
      return res
        .status(500)
        .json({ message: "Error updating message", status: false });
    } finally {
      client.close(); // Ensure the client is closed after the operations
    }
  }
  
  else {
    return res
      .status(405)
      .json({ message: "Method not allowed", status: false });
  }
};

export default messageHandler;
