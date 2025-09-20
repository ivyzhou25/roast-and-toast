import mongoose, { Schema, Document } from "mongoose";

export interface IResponse extends Document {
  groupId: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId;
  questionId: string;
  text: string;
  createdAt: Date;
}

const responseSchema: Schema<IResponse> = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  groupId: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  questionId: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Response || mongoose.model<IResponse>("Response", responseSchema);
