import mongoose, { Schema, Document } from "mongoose";

export interface IGroupMember extends Document {
  groupId: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId;
}

const groupMemberSchema: Schema<IGroupMember> = new mongoose.Schema({
  groupId: {type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
});

export default mongoose.models.GroupMember || mongoose.model<IGroupMember>("GroupMember", groupMemberSchema);
