import { MongoClient } from "mongodb";
import { notFound } from "next/navigation";

// const connectString = process.env.MONGODB_URL;

export const connectDB = async () => {
  try {
    const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.wu3eq.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;
    return await MongoClient.connect(connectString);
  } catch (error) {
    console.log("failed to connect to db");
    throw notFound(); // {{ edit_1 }}: Rethrow the error for further handling
  }
};
