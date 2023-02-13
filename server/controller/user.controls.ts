import UserModel from "../model/user.model";
import { Request, Response, NextFunction } from "express";
import { userData } from "../model/allInterfaces";

//register user

export const signUp = async (
  req: Request<{}, {}, userData>,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      message: "user created ",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "unable to create user",
      data: error,
    });
  }
};

//login user

export const signIn = async (
  req: Request<{}, {}, userData>,
  res: Response
): Promise<Response> => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });

    return res.status(201).json({
      message: "login successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "unable to login user",
      data: error,
    });
  }
};

//get all users

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await UserModel.find();

    return res.status(200).json({
      message: "gotten all users",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "unable to get all users",
      data: error,
    });
  }
};

//get one user

export const GetSingleUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getUser = await UserModel.findById(req.params.id).populate([
      {
        path: "myDay",
        options: {
          sort: {
            createdAt: -1,
          },
        },
      },
      {
        path: "task",
        options: {
          sort: {
            createdAt: -1,
          },
        },
      },
      {
        path: "assigned",
        options: {
          sort: {
            createdAt: -1,
          },
        },
      },
    ]);

    return res.status(200).json({
      message: "Found SuccessFull",
      data: getUser,
    });
  } catch (err) {
    return res.status(404).json({
      message: "an error occurred",
    });
  }
};
