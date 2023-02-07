import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import pic from "../assests/logo.svg"

const SignUp = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Logo>
                    {/* <img src={pic} alt="logo" /> */}
                </Logo>
                <P>Create account</P>
            
            
<InputHold>
<input type="text" placeholder="someone@gmail.com" />
</InputHold>
<Text><p>No account ? <Span to = "/signup">Create one</Span></p>
<a href="">sign up with phone number?</a>
</Text>
<ButtonHold>
  
    <Button to = "/signin">Next</Button>
</ButtonHold>
            </Wrapper>
        </Container>
    </div>
  )
}

export default SignUp

const P = styled.p`
font-size: 30px;
font-weight: 400;
`

const Button1 = styled.div`
    color: black;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
    width: 150px;
    height: 50px;
    font-size: 17px;

    font-weight: 400;
    background-color: lightgray ;
    cursor: pointer;
`

const Logo = styled.div`
    
    width: 200px;
    height: 50px;
    /* background-color: red; */
    border: 1px solid lightgray;
`

const Span = styled(Link)`
     color: #1fa3cf;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;

    :hover{
        text-decoration: underline;
        color: gray;
    }
`

const Button = styled(Link)`
color: white;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
    width: 150px;
    height: 50px;
    font-size: 17px;
    margin-left: 10px;

    font-weight: 400;
    background-color: #005da6 ;
    cursor: pointer;
`

const ButtonHold = styled.div`
margin-top: 20px;
display: flex;
width: 100%;
justify-content: flex-end;
/* background-color: purple; */
`

const Text = styled.div`
text-align: left;

a{
    color: #1fa3cf;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 10px;


    :hover{
        text-decoration: underline;
        color: gray;
    }
}

margin-bottom: 20px;
p{
    font-size: 15px;
    font-weight: 600;

}

span{
   
}
`

const InputHold = styled.div`


input{
    width: 300px;
    height: 30px;
   
    border: none;
 border-bottom: 1px solid black;
 outline: none;
 margin-bottom: 20px;
}
`

const Wrapper = styled.div`
    width: 450px;
    /* height: 300px; */
    background-color: white;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 50px;
    padding-top: 70px;

   
`

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #123456;
display: flex;
justify-content: center;
align-items: center;

`