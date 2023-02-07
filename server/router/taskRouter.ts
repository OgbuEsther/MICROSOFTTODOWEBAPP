import { Router } from "express";
import { createTasks, getTasks, updatetasks } from "../controller/task.controls";


const taskRouter = Router()

taskRouter.route("/getalltasks/:userID").get(getTasks)
taskRouter.route("/newtask/:userID").post(createTasks)
taskRouter.route("/update/:taskID").patch(updatetasks)
export default taskRouter 