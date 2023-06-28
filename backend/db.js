import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.CONNECTION_URL;

export const db = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};
