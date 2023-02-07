import express, { Application } from "express"
import cors from "cors"
import UserRouter from "./router/userRouter";
import taskRouter from "./router/taskRouter";

const appConfig = (app:Application) =>{
    app.use(express.json()).use(cors());

    //routes
    app.use("/api" , UserRouter)
    app.use("/api/task" , taskRouter)
}


export default appConfig