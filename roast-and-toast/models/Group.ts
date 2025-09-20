import mongoose, { Schema, Document } from "mongoose";

export interface IGroup extends Document {
  joinCode: string;
  createdAt: Date;
}

const groupSchema: Schema<IGroup> = new mongoose.Schema({
  joinCode: {type: String, required: true},
  createdAt: {type: Date, default: Date.now },
});

export default mongoose.models.Group || mongoose.model<IGroup>("Group", groupSchema);