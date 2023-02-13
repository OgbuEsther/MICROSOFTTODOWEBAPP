import { Router } from "express";
import {
  createTasks,
  getTasks,
  updatetasks,
  getSingleTask,
  CompleteTask,
  UnCompleteTask,
} from "../controller/task.controls";

const taskRouter = Router();

taskRouter.route("/getalltasks/:userID").get(getTasks);
taskRouter.route("/newtask/:userID").post(createTasks);
taskRouter.route("/update/:taskID").patch(updatetasks);
taskRouter.route("/singleTask/:id").get(getSingleTask);
taskRouter.route("/completeTask/:userID/:TaskID").patch(CompleteTask);
taskRouter.route("/uncompleteTask/:userID/:TaskID").patch(UnCompleteTask);
export default taskRouter;
