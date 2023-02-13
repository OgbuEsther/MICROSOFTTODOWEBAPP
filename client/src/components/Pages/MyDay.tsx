import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import {MdOutlineWbSunny} from "react-icons/md"
import {AiOutlineStar} from "react-icons/ai"
import { BiCalendar } from "react-icons/bi"
import axios from "axios"

import { GlobalContext } from '../Global/GlobalData';
import Swal from 'sweetalert2';


type TaskData = {
	_id: string;
	status: boolean;
	remainder: string;
	date: string;
	title: string;
	note: string;
	reciever: string;
};

interface User {
	name: string;
	email: string;
	_id: string;
	task: any[];
	myDay: TaskData[];
}

const MyDay = () => {
	const {userData } = useContext(GlobalContext)
	const [currentUser, setCurrentUser] = useState({} as User)
	const [title, setTitle] = useState("")
	// const [date, setDate] = useState("")
	const [calender , setCalender] = useState(new Date().toDateString())

	const addtask = async () => { 
		await axios.post(`http://localhost:4000/api/task/newtask/${userData?._id}`, {
			title,
			date : calender
		}).then((res) => {
	
			 Swal.fire({
            icon: "success",
            title: "Successfully added a task",
        
				 timer: 3000,
			
			 });
			window.location.reload()
		})
	}

	const getUser = async () => {
		await axios
			.get(`http://localhost:4000/api/getOne/${userData?._id}`)
			.then((res) => {
		
				setCurrentUser(res.data.data);
					
			});
	};



		const taskUpdateTrue = async (id: string) => {
		await axios
			.patch(
				`http://localhost:4000/api/task/completeTask/${userData?._id}/${id}`,
			)
			.then(() => {
					console.log("task completed") 
			
				// setTimeout(() => {
				// 	window.location.reload();
				// }, 1000);
				
			 Swal.fire({
            icon: "success",
            title: "task successfully completed",
        
				 timer: 3000,
			
			 });
			});

	
	};

		const taskUpdatefalse = async (id: string) => {
		await axios
			.patch(
				`http://localhost:4000/api/task/uncompleteTask/${userData?._id}/${id}`,
			)
			.then(() => {
			
				console.log("task uncompleted") 
			});
	};

	React.useEffect(() => {
		getUser();
	},[userData]);
 
	return (
		<>
			<Container>
				<Cont>
					<Hold>
						<Main>
							<IconHold>
							
								<MdOutlineWbSunny />
							</IconHold>
							<h3>MyDay</h3>
						</Main>

					<TextHld>
          <span>Sunday, January 15</span>
          </TextHld>
					</Hold>
					<br />

					<InputHold>
						<Input2 type='radio' />
						<Input
							onChange={(e) => {
								setTitle(e.target.value)
						}}
							placeholder='Add Task'
						/>
					</InputHold>
					<Down >
						<First>
							<BiCalendar />
						</First>
						
							{title !== "" ? (
							<Button onClick={addtask}>Add</Button>
						) : (
							<Button disabled style={{ cursor: "not-allowed" }}>
								Add
							</Button>
						)}

					
							<DatePicker>
							
							</DatePicker>
				
					</Down>
					<br />
					{currentUser?.myDay?.map((props) => (
					<InputHold2 key = {props._id}>
							<Hol>
								<Input2
									checked={props.status}
									onClick={() => {
										if (props.status ) {
											taskUpdateTrue(props._id)
										} else {
											taskUpdatefalse(props._id)
                                        }
										
									}}
								
									type='radio'
								/>
								<TitleHold>
									<Title>
									{props.title}
									</Title>
									<Sub>
										<BiCalendar />
											Due : 
										{props.date}
									
									</Sub>
								</TitleHold>
							</Hol>
							<span>
								<AiOutlineStar />
								<div></div>
							</span>

						</InputHold2>
				  ))}
				
						
			
				</Cont>
			</Container>
		</>
	);
}

export default MyDay

const TextHld = styled.div`
  display: flex;
  width: calc(100% - 300px);
  justify-content: flex-start;
  align-items: flex-start;
`

const DatePicker = styled.div`
	position: absolute;
	max-width: 250px;
	height: 70px;
	top: 40px;
`;

const TitleHold = styled.div`
	font-size: 12px;
	margin-left: 10px;
	flex: 1;
`;
const Sub = styled.div`
	font-size: 10px;
`;
const Title = styled.div`
	font-weight: 500;
	text-decoration: 67%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	max-width: 200px;
`;
const Hol = styled.div`
	display: flex;
	align-items: center;
`;
const First = styled.div`
	margin-left: 10px;
	cursor: pointer;
`;
const Button = styled.button`
	margin-right: 10px;
	height: 30px;
	width: 60px;
	background-color: white;
	border: 1px solid silver;
	outline: none;
	cursor: pointer;
`;

const Down = styled.div`
	height: 40px;
	width: 67%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
	border-radius: 0px 0px 5px 5px;
	position: relative;
`;

const InputHold2 = styled.div`
	width: 67%;
	background-color: #f1f1f1;
	height: 40px;
	display: flex;
	align-items: center;
	border-radius: 5px 5px 0px 0px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
	justify-content: space-between;
	cursor: pointer;
	transition: all 350ms;
	margin-bottom: 10px;

	span {
		margin-right: 20px;
	}

	:hover {
		background-color: #e3f7fe;
	}
`;
const InputHold = styled.div`
	width: 67%;
	background-color: white;
	height: 40px;
	display: flex;
	align-items: center;
	border-radius: 5px 5px 0px 0px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

const Input2 = styled.input`
	border-color: 1px solid blue;
	margin-left: 10px;
`;
const Input = styled.input`
	border: none;
	outline: none;
	flex: 1;

	::placeholder {
		padding-left: 5px;
	}
`;

const Main = styled.div`
	display: flex;
	align-items: center;
`;
const IconHold = styled.div`
	font-size: 20px;
	margin-right: 10px;
	margin-top: 25px;
`;

const Cont = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	padding-left: 100px;
	flex-direction: column;
	margin-top: 70px;
	/* background-color: red; */
	flex: 1;
`;
const Hold = styled.div`
	width: 100%;

	h3 {
		margin-bottom: 0;
		padding-bottom: 0;
	}

	span {
		font-size: 12px;
	}
`;

const Container = styled.div`
	min-width: calc(100vw - 230px);
	min-height: calc(100vh);

	display: flex;
	overflow: hidden;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	background-color: #f0f8ff1c;
    margin-left: 230px;
/* position: relative; */
	/* flex-direction: column; */
`;
