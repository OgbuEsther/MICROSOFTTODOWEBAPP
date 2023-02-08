import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

const SignIn = () => {
  const [email, setEmail] = React.useState("");

  const navigate = useNavigate();

  const login = async () => {
    await axios
      .post(`http://localhost:4000/api/signin`, { email })
      .then((res: any) => {
        console.log(res);
        window.localStorage.setItem("userData", JSON.stringify(res.data.data));
        Swal.fire({
            icon: "success",
            title: "Successfully Sign In",
            // text: res!.response!.data!.message,
            timer: 3000,
        });
        navigate("/task");
        window.location.reload();
    })
    .catch((res) => {
        Swal.fire({
            icon: "error",
            title: "An Error occured",
            text: res!.response!.data!.message,
        });
    });
  };

  return (
    <div>
      <Container onSubmit={login}>
        <Wrapper>
          <Logo></Logo>
          <P>Sign in</P>

          <InputHold>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              type="email"
              placeholder="Email , phone , Skype"
            />
          </InputHold>
          <Text>
            <p>
              No account ? <Span to="/signup">Create one</Span>
            </p>
            <a href="">Can't access your account ??</a>
          </Text>
          <ButtonHold>
            <Button1>Back</Button1>
            <Button type="submit">Next</Button>
          </ButtonHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SignIn;

const P = styled.p`
  font-size: 30px;
  font-weight: 400;
`;

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
  background-color: lightgray;
  cursor: pointer;
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
  margin-top: 20px;
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

  margin-bottom: 20px;
  p {
    font-size: 15px;
    font-weight: 600;
  }

  span {
  }
`;

const InputHold = styled.div`
  input {
    width: 300px;
    height: 30px;

    border: none;
    border-bottom: 1px solid black;
    outline: none;
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  width: 400px;
  height: 350px;
  background-color: white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
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
