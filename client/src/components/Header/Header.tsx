import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'

const Header = () => {
  return (
    <div>
      <Container>
        <DivOne>
<LogoHold>
    <Icon></Icon>
    <h4>To Do</h4>
</LogoHold>

<Searchbar>
    <Icon2></Icon2>
    <input type="search" />
</Searchbar>

<IconHold>
    <Icons></Icons>
    <Icons></Icons>
    <Icons></Icons>
    <Icons></Icons>
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


const Icons = styled.div``

const IconHold = styled.div`
width: 300px;
height: 30px;
background-color: orangered;
`

const Icon2 = styled.div``

const Searchbar = styled.div`


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



const Icon = styled.div``

const LogoHold = styled.div``


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

`

const Container = styled.div`
`