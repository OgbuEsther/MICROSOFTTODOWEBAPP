import mongoose from "mongoose";

import { userData } from "./allInterfaces";


interface user extends userData , mongoose.Document{}


const userSchema = new mongoose.Schema(

    {
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		myDay: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "tasksColl",
			},
		],
		important: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "tasksColl",
			},
		],
		planned: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "tasksColl",
			},
		],
		assigned: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "tasksColl",
			},
		],
		task: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "tasksColl",
			},
		],
	},
	{ timestamps: true },
)


const UserModel = mongoose.model<user>("userColl" , userSchema)

export default UserModel