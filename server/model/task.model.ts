import mongoose from "mongoose";
import { taskData } from "./allInterfaces";

export interface task extends taskData, mongoose.Document {}

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  remainder: {
    type: String,
  },
  note: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  sender: {
    type: String,
  },
  reciever: {
    type: String,
  },
});

const taskModel = mongoose.model<task>("tasksColl", taskSchema);

export default taskModel;
