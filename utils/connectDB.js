import { MongoClient } from "mongodb";
import { notFound } from "next/navigation";

// const connectString = process.env.MONGODB_URL_LOCAL;
// const connectString = process.env.MONGODB_URL_DEV;
const connectString = process.env.MONGODB_URL_PROD;

// const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.wu3eq.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    return await MongoClient.connect(connectString);
  } catch (error) {
    console.log("failed to connect to db");
    throw notFound(); // {{ edit_1 }}: Rethrow the error for further handling
  }
};
