import { MongoClient } from "mongodb";

// const connectString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.wu3eq.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;

const connectString = process.env.MONGODB_URL;

export const connectDB = async () => {
  try {
    return await MongoClient.connect(connectString);
  } catch (error) {
    console.log("failed to connect to db");
  }
};
