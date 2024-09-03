import { connectDB } from "@/utils/connectDB";

export const insertDoc = async (client, collection, doc) => {
  const db = client.db();
  return await db.collection(collection).insertOne(doc);
};

export const getAllDocs = async (client, collection, sort, filter) => {
  const db = client.db();
  return await db.collection(collection).find(filter).sort(sort).toArray();
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
      const { email, name, subject } = req.body;

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

      const newMessage = { email, name, message };

      const result = await insertDoc(client, "messages", newMessage);
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
  } else if (req.method === "PATCH") {
  } else if (req.method === "DELETE") {
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", status: false });
  }
};

export default messageHandler;
