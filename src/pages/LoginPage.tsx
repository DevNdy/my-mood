import React from "react";
import styled from "styled-components";
import LoginWelcome from "../components/login/LoginWelcome";
import LoginSign from "../components/login/LoginSign";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <LoginWelcome />
      <LoginSign />
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export default LoginPage;
