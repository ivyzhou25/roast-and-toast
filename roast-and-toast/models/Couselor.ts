import mongoose, { Schema, Document } from "mongoose";

export interface ICounselorResponse extends Document {
  groupId: mongoose.Schema.Types.ObjectId;
  prompt: string;
  text: string;
  createdAt: Date;
}

const groupAIPromptSchema = new Schema<ICounselorResponse>({
  groupId: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  prompt: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.GroupAIPrompt || mongoose.model<ICounselorResponse>("CounselorResponse", groupAIPromptSchema);
