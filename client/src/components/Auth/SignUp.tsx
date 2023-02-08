import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import axios from "axios";
import { GlobalContext } from "../Global/GlobalData";

const SignUp = () => {
  // const {userData , setuserData} = useContext(GlobalContext)
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = async (e: any) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:4000/api/signup`, {
        name,
        email,
        password,
      })
      .then((res) => {
        Swal.fire({
          title: "registration",
          html: "redirecting to login",
          timer: 2000,
          timerProgressBar: true,

          willClose: () => {
            navigate("/signin");
          },
        });
        console.log(res);
        window.localStorage.setItem("userData", JSON.stringify(res.data.data));
      });
  };
  // console.log("this is the current user", currentUser);

  return (
    <div>
      <Container onSubmit={postData}>
        <Wrapper>
          <Logo>{/* <img src={pic} alt="logo" /> */}</Logo>
          <P>Create account</P>

          <InputHold>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Enter your name"
            />

            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="someone@gmail.com"
            />

            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter password"
            />
          </InputHold>
          <Text>
            <p>
              have an account ? <Span to="/signin">sign in</Span>
            </p>
            <a href="">sign up with phone number?</a>
          </Text>
          <ButtonHold>
            <Button type="submit">Next</Button>
          </ButtonHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SignUp;

const P = styled.p`
  font-size: 30px;
  font-weight: 400;
`;

const Logo = styled.div`
  width: 200px;
  height: 50px;
  /* background-color: red; */
  border: 1px solid lightgray;
`;

const Span = styled(Link)`
  color: #1fa3cf;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    color: gray;
  }
`;

const Button = styled.button`
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
  background-color: #005da6;
  cursor: pointer;
`;

const ButtonHold = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  
  /* background-color: purple; */
`;

const Text = styled.div`
  text-align: left;

  a {
    color: #1fa3cf;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 10px;
    text-decoration: none;

    :hover {
      text-decoration: underline;
      color: gray;
    }
  }

  margin-bottom: 10px;
  p {
    font-size: 15px;
    font-weight: 600;
  }

  span {
  }
`;

const InputHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  input {
    width: 300px;
    height: 30px;

    border: none;
    border-bottom: 1px solid black;
    outline: none;
    margin-bottom: 10px;
  }
`;

const Wrapper = styled.div`
  width: 400px;
  height: 370px;
  background-color: white;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
  margin-top: 30px;
`;

const Container = styled.form`
  width: 100%;
  height: 100vh;
  /* background-color: #123456; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
