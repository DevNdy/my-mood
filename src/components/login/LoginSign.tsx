import React from "react";
import styled from "styled-components";
import SignIn from "./sign/SignIn";

const LoginSign = () => {
  return (
    <LoginSignStyled>
      <SignIn />
    </LoginSignStyled>
  );
};

const LoginSignStyled = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default LoginSign;
