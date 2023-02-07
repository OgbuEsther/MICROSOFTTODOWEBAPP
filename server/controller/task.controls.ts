import { Request , Response } from "express";
import mongoose, { mongo } from "mongoose";
import taskModel, { task } from "../model/task.model";
import UserModel from "../model/user.model";


//get all tasks

export const getTasks = async(req:Request , res:Response):Promise<Response> =>{
    try {
        const user = await UserModel.findById(req.params.userID)

        const getTasks = await user?.task
        
        return res.status(200).json({
            message : "gotten all users",
            data : getTasks
        })
    } catch (error) {
        return res.status(400).json({
            message : "failed to get all tasks ",
            data : error
        })
    }
}

//create tasks

export const createTasks = async(req:Request , res:Response ):Promise<Response> =>{
    try {
        const getUser = await UserModel.findById(req.params.userID)

        if(getUser){
            const {title , date} = req.body  

            let mydate = new Date().toDateString()

            const creating = await taskModel.create({
                title , 
                date : date ? date : mydate,
                remainder : "",
                status : false,
                note : "",
                sender : "",
                reciever : ""
            })

            await getUser.myDay.push(new mongoose.Types.ObjectId(creating!._id))

            await getUser.task.push(new mongoose.Types.ObjectId(creating!._id))

            getUser.save()

            return res.status(200).json({
				message: "success",
				data: creating,
			});
        } else {
			return res.status(404).json({
				message: "user not found",
			});
		}
      
    } catch (error) {
        return res.status(400).json({
            message : "failed to create tasks ",
            data : error
        })
    }
}


//updating tasks

export const updatetasks = async(req:Request , res:Response):Promise<Response> =>{
    try {
        const {note , title} = req.body

        const completed = await taskModel.findByIdAndUpdate(req.params.taskID , {
            note : note,
            title : title
        } , {new : true})

        return res.status(200).json({
			message: "updated successfully",
			data: completed,
		});
    } catch (error) {
        return res.status(400).json({
            message : "failed to update tasks ",
            data : error
        })
    }
}