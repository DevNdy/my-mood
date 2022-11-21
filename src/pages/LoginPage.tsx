import React from "react";
import styled from "styled-components";
import LoginWelcome from "../components/login/LoginWelcome";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <LoginWelcome />
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export default LoginPage;
