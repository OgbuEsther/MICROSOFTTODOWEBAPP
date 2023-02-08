import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineBell } from "react-icons/ai";
import { CiRepeat } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { TiAttachment } from "react-icons/ti";
import { BiCalendar } from "react-icons/bi";

import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";

const DetailsComp = () => {
	// const { toggleShow, readID } = useContext(GlobalContext);
	// const [taskData, setTaskData] = useState({} as any);
	// const [note, setNote] = useState(taskData?.note);
	// const [title, setTitle] = useState(taskData?.title);
	// const [showAssigned, setShowAssigned] = useState(false);

	// const ChangeState = () => {
	// 	setShowAssigned(!showAssigned);
	// };

	// const getSingleTask = async () => {
	// 	await axios
	// 		.get(`http://localhost:5000/api/task/singleTask/${readID}`)
	// 		.then((res) => {
	// 			console.log(res);
	// 			setTaskData(res.data.data);
	// 		});
	// };

	// const updatingTask = async () => {
	// 	await axios
	// 		.patch(`http://localhost:5000/api/task/updateTask/${readID}`, {
	// 			title,
	// 			note,
	// 		})
	// 		.then((res) => {
	// 			console.log(res);
	// 			window.location.reload();
	// 		});
	// };

	// useEffect(() => {
	// 	getSingleTask();
	// }, [readID]);

	return (
		<Container>
      <Cont>
			<MainCont>
				<Card>
					<IconHold>
						<input
						
							type=''
						/>
					</IconHold>
				</Card>
				<Card>
					<IconHold>
						<BiCalendar />
					</IconHold>
					<span>Due </span>
				</Card>
				<Card>
					<IconHold>
						<AiOutlineBell />
					</IconHold>
					<span>Remind Me</span>
				</Card>
				<Card>
					<IconHold>
						<CiRepeat />
					</IconHold>
					<span>Repeat</span>
				</Card>
				<Card>
					<IconHold>
						<FaRegUserCircle />
					</IconHold>
					<span style={{ cursor: "pointer" }}>
						Assigned Task
					</span>
			
						<UserAssignCard>
							<input placeholder='Enter user Email ' />
							<button>Assign Task</button>
						</UserAssignCard>
					
				</Card>
				<Card>
					<IconHold>
						<TiAttachment />
					</IconHold>
					<span>Add File</span>
				</Card>
				<Card
					style={{
						flex: 1,
					}}>
					<Hol>
						<textarea
			
							
							placeholder='Edited...'
						/>
						<button >Update</button>
						<span>Sunday, January 15</span>
					</Hol>
				</Card>
			</MainCont>
		</Cont>
    </Container>
	);
};

export default DetailsComp;

const Container = styled.div`
  /* position: fixed; */
  overflow: hidden;
  height: 100vh;
	
	background-color: white;
	width: 280px;

  box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.05);
  position: absolute;
  right: 0;
  top: 10px;
  margin-top: 30px;
`

const UserAssignCard = styled.div`
	position: absolute;
	height: 100px;
	width: 230px;
	top: 40px;
	background-color: white;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

  box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.05);

	button {
		background-color: #8a8aff;
		height: 30px;
		width: 120px;
		color: white;
		outline: none;
		border: none;
	}

	input {
		height: 30px;
		width: 80%;
		margin-bottom: 10px;
		padding-left: 10px;
	}
`;

const Hol = styled.div`
	display: flex;
	flex-direction: column;

	span {
		font-size: 10px;
	}
`;

const IconHold = styled.div`
	margin-right: 10px;

	input {
		border: none;
		outline: none;
		height: 100%;
		width: 100%;
	}
`;
const MainCont = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	/* justify-content: center; */
	margin-top: 70px;
	flex-direction: column;
	align-items: center;
 
`;
const Card = styled.div`
	height: 40px;
	width: 90%;
	background-color: white;
	display: flex;
	align-items: center;
	padding-left: 10px;
	border-radius: 5px;
	margin-bottom: 10px;
	/* position: fixed; */

	textarea {
		/* flex: 1; */
		min-height: 200px;
		outline: none;
		border: none;
		resize: none;
		width: 230px;
	}
`;

const Cont = styled.div`
	 /* position: fixed; */
  
`;
