import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  phone: string;
  email: string;
  createdAt: Date;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  name: {type: String, required: true },
  username: {type: String, required: true},
  phone: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  createdAt: {type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model<IUser>("User", userSchema);
