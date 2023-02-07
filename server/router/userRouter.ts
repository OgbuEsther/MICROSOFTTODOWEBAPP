import { Router } from "express";
import { getUsers, signIn, signUp } from "../controller/user.controls";


const UserRouter = Router()

UserRouter.route("/").get(getUsers)
UserRouter.route("/signin").post(signIn)
UserRouter.route("/signup").post(signUp)

export default UserRouter