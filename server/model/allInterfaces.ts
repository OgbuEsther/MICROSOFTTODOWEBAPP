import mongoose from "mongoose";


export interface taskData {
    title?: string;
	date?: string;
	remainder?: string;
	note?: string;
	status: boolean;
    reciever : string,
    sender : string
}

export interface userData {
	name: string;
	email: string;
	password: string;
	myDay: any[];
	important: taskData[];
	planned: taskData[];
	assigned: taskData[];
	task: any[];

} 