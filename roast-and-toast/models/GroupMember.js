import mongoose, { Schema } from "mongoose";

const groupMemberSchema = new Schema({
  groupId: { type: Schema.Types.ObjectId, ref: "Group", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.models.GroupMember ||
  mongoose.model("GroupMember", groupMemberSchema);
