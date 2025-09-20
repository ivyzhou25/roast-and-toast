import mongoose, { Schema } from "mongoose";

const groupSchema = new Schema({
  joinCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Group || mongoose.model("Group", groupSchema);
