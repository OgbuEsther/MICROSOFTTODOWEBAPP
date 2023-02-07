import React from 'react'
import styled from 'styled-components'
import {MdOutlineWbSunny } from "react-icons/md"

const MyDay = () => {
  return (
    <div>
       <Container>
     <Wrapper>
     <Text>
           <Main>
           <Icon>
            <MdOutlineWbSunny />
            </Icon>
            <h1>My Day</h1>
            <Icon>...</Icon>
           </Main>
          <Tex> <span>Sunday, January 15</span></Tex>
        </Text>
        <IconHold>
            <One>Sort</One>
            <Two>Suggestions</Two>

        </IconHold>
     </Wrapper>
       </Container>
    </div>
  )
}

export default MyDay

const Wrapper = styled.div`
  width: 100%;
	display: flex;
	/* justify-content: flex-start; */
	padding-left: 150px;
	flex-direction: column;
	margin-top: 70px;
	background-color: red;
	flex: 1;
`

const Tex = styled.div``

const Main = styled.div`
display: flex;
align-items: center;
  
`

const Two = styled.div``

const One = styled.div``

const IconHold = styled.div`
display: flex;
`


const Icon = styled.div``

const Text = styled.div`
display: flex;
width: 100%;

	h3 {
		margin-bottom: 0;
		padding-bottom: 0;
	}

	/* span {
		font-size: 12px;
	} */
`

const Container = styled.div`
	min-width: calc(100% - 300px);
	min-height: calc(100vh - 50px);

	display: flex;
	overflow: hidden;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	background-color: #faf9f8;


`