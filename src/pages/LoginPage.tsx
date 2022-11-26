import React from "react";
import styled from "styled-components";
import LoginWelcome from "../components/login/LoginWelcome";
import LoginSign from "../components/login/LoginSign";
import { useMediaQuery } from "react-responsive";

const LoginPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1080px)" });

  return (
    <LoginPageStyled>
      {isTabletOrMobile ? <></> : <LoginWelcome />}
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
