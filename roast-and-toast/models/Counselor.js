import mongoose, { Schema } from "mongoose";

const groupAIPromptSchema = new Schema({
  groupId: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  prompt: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.CounselorResponse ||
  mongoose.model("CounselorResponse", groupAIPromptSchema);
