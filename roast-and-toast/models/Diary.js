import mongoose, { Schema } from "mongoose";

const diarySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.DiaryEntry ||
  mongoose.model("DiaryEntry", diarySchema);
