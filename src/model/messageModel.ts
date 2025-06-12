import { model, models, Schema } from "mongoose";

const messageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  msg: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now }
});

const messageModel = models.Message || model("Message", messageSchema);

export default messageModel;