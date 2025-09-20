import mongoose from "mongoose";

const uri = process.env.URI;

if (!uri) throw new Error("Please add your Mongo URI to .env.local");

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
};
