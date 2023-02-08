import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'
import {BsFillGrid3X3GapFill} from "react-icons/bs"
import {VscSearch} from "react-icons/vsc"
import {AiOutlineSetting , AiOutlineQuestion , AiOutlineNotification } from "react-icons/ai"
const Header = () => {
  return (
    <div>
      <Container>
        <DivOne>
<LogoHold>
    <Icon>
      <BsFillGrid3X3GapFill />
    </Icon>
    <h4>To Do</h4>
</LogoHold>

<Searchbar>
    <Icon2>
    <VscSearch />
    </Icon2>
    <input type="search" />
</Searchbar>

<IconHold>
    <Icons>
    <AiOutlineSetting />
    </Icons>
    <Icons>
    <AiOutlineQuestion />
    </Icons>
    <Icons>
    <AiOutlineNotification />
    </Icons>
    <Icons>
      <Circle>T</Circle>
    </Icons>
</IconHold>

        </DivOne>
        {/* <DivTwo> */}
<SideBar />
        {/* </DivTwo> */}
      </Container>
    </div>
  )
}

export default Header

const Circle = styled.div`
	height: 30px;
	width: 30px;
	border: 1px solid white;
	border-radius: 50%;
	align-items: center;
	display: flex;
	justify-content: center;
`;

const Icons = styled.div`
	display: flex;
	margin-right: 10px;
	transition: all 350ms;
	height: 100%;
	align-items: center;
	display: flex;
	justify-content: center;
	width: 40px;
  font-size: 20px;
  color: white;
  font-weight: 600;
	cursor: pointer;

	:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`;




const IconHold = styled.div`
/* width: 300px; */
/* height: 30px; */
/* background-color: orangered; */
margin-right: 20px;
	display: flex;
	align-items: center;
	height: 100%;

`

const Icon2 = styled.div`
color: #2564CF;
margin-left: 6px;
margin-top: 3px;
margin-right: 10px;
`

const Searchbar = styled.div`

display: flex;
align-items: center;
width: 400px;
height: 30px;
background-color: #ffff;
border-radius: 5px;

input{
    outline: none;
    outline-color: transparent;
border: none;
flex: 1;
width: 380px;
height: 30px;
background-color: #ffff;
border-radius: 5px;

}
`



const Icon = styled.div`

font-size : 25px;
color : white;
/* background-color : red ; */
margin-right: 20px;
margin-top: 5px;
font-weight: 100;

`

const LogoHold = styled.div`
display: flex;
align-items: center;
margin-left: 20px;

h4{
  color: white;
  font-size: 25px;
  font-weight: 600;
}
`


const DivTwo = styled.div`
width: 300px;
height: calc(100vh - 50px);
background-color: #ffff;
box-shadow: 0px 0px 1px 2px rgba(0,0,0,0.2);



`

const DivOne = styled.div`

width: 100%;
height: 50px;
background-color:  #005da6;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
z-index: 9999;


`

const Container = styled.div`
/* position: fixed; */
position: relative;
`