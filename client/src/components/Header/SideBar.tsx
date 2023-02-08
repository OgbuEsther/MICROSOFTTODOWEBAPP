import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {MdOutlineWbSunny} from 'react-icons/md'
import {AiOutlineStar} from "react-icons/ai"
import {BiCalendar} from "react-icons/bi"
import {FaRegUser } from "react-icons/fa"
import {FiHome } from "react-icons/fi"

const SideBar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
<Icon>
<h4>menu</h4>
</Icon>

<NavHold>
    <Navs>
   
   <IconHld>
   <MdOutlineWbSunny />
   </IconHld>
        <P  to = "/task/myday" style={({ isActive }) => {
							return {
								color: isActive ? "blue" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}>My Day</P>
    </Navs>
    <Navs >
    <IconHld>
    <AiOutlineStar />
    </IconHld>
    
        <P  to = "/task/important" style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}>Important</P>
    </Navs>
    <Navs>
    <IconHld>
    <BiCalendar />
    </IconHld>
  
        <P  to = "/task/planned" style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}>Planned</P>
    </Navs>
    <Navs >
    <IconHld>
    <FaRegUser />
    </IconHld>
    
        <P to = "/task/assigned" style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}>Assigned to me</P>
    </Navs>
    <Navs >
    <IconHld>
    <FiHome />
    </IconHld>
    
        <P to = "/task/tasks" style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}>Tasks</P>
    </Navs>
   
</NavHold>
<hr />
{/* <br /> */}

<List>
    <Icn>+</Icn>
    <p>New list</p>
    <Icn>+</Icn>
</List>
            </Wrapper>
        </Container>
    </div>
  )
}

export default SideBar

const IconHld = styled.div`
font-size: 15px;
margin-left: 20px;
margin-right: 10px;
color: #000000b0;
font-weight: lighter;
`

const P = styled(NavLink)`
    text-decoration: none;
    color: #000000dc;
    /* color: red; */
    font-size: 14px;
    /* font-weight: 400; */
`

const Icon = styled.div`
text-align: left;
font-size: 20px;
margin-bottom: 10px;
`

const Icn = styled.div`
color: blue;
font-size: 20px;
`

const List = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;

p{
    font-size: 20px;
    color: blue;
}
`

const Navs = styled.div`
/* margin-bottom: 10px; */
display: flex;
align-items: center;




width: 230px;
height: 50px;
background-color: #ffff;
text-align: left;

:hover{
    background-color: lightgray;
}

`

const NavHold = styled.div``


const Wrapper = styled.div`
width: 100%;
height: 100%;
/* background-color: blue; */
`

const Container = styled.div`
width: 230px;
/* margin-left: 20px; */
/* margin-top: 50px; */
/* height: calc(100vh - 50px); */
height: 100vh;
/* background-color: red; */
position: fixed;

box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.05);
`