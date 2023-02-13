import { Router } from "express";
import {
  getUsers,
  signIn,
  signUp,
  GetSingleUser,
} from "../controller/user.controls";

const UserRouter = Router();

UserRouter.route("/").get(getUsers);
UserRouter.route("/signin").post(signIn);
UserRouter.route("/signup").post(signUp);
UserRouter.route("/getOne/:id").get(GetSingleUser);

export default UserRouter;
