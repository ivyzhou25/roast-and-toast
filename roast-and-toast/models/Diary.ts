import mongoose, { Schema, Document } from "mongoose";

export interface IDiaryEntry extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  text: string;
  createdAt: Date;
}

const diarySchema = new Schema<IDiaryEntry>({
  userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
  text: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
});

export default mongoose.models.DiaryEntry || mongoose.model<IDiaryEntry>("DiaryEntry", diarySchema);