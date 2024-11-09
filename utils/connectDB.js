import { MongoClient } from "mongodb";

// const connectString = process.env.MONGODB_URL_LOCAL;
// const connectString = process.env.MONGODB_URL_DEV;
const connectString = process.env.MONGODB_URL_PROD;

// const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.wu3eq.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    return await MongoClient.connect(connectString);
  } catch (error) {
    console.log("Failed to connect to DB:", error);
    throw new Error("Database connection failed");
  }
};
