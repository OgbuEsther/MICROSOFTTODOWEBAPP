import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SideBar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
<Icon>
    =
</Icon>

<NavHold>
    <Navs>
        <P  to = "/task/myday">My Day</P>
    </Navs>
    <Navs >
        <P to = "/task/important">Important</P>
    </Navs>
    <Navs>
        <P  to = "/task/planned">Planned</P>
    </Navs>
    <Navs >
        <P to = "/task/assigned">Assigned to me</P>
    </Navs>
    <Navs >
        <P to = "/task/tasks">Tasks</P>
    </Navs>
   
</NavHold>
<hr />

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

const P = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: 500;
`

const Icon = styled.div`
text-align: left;
font-size: 20px;
margin-bottom: 10px;
`

const Icn = styled.div``

const List = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`

const Navs = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;



width: 300px;
height: 50px;
background-color: #ffff;
text-align: left;

:hover{
    background-color: darkgrey;
}

`

const NavHold = styled.div``


const Wrapper = styled.div`
width: 100%;
height: 100%;
/* background-color: blue; */
`

const Container = styled.div`
width: 300px;
/* margin-left: 20px; */
height: calc(100vh - 50px);
/* background-color: red; */
position: fixed;

box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.2);
`