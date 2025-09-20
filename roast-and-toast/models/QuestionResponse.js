import mongoose, { Schema } from "mongoose";

const responseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  groupId: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  questionId: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Response ||
  mongoose.model("Response", responseSchema);
