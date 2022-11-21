import React, { useState } from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";
import SignIn from "./sign/SignIn";
import SignUp from "./sign/SignUp";

const LoginSign = () => {
  const [signInOrSignUp, setSignInOrSignUp] = useState(false);
  return (
    <LoginSignStyled>
      {signInOrSignUp ? <SignUp /> : <SignIn />}

      <button onClick={() => setSignInOrSignUp(!signInOrSignUp)} className="btnSignInOrSignUp">
        {signInOrSignUp ? "Déjà inscrit?" : "Pas encore de profil?"}
      </button>
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

  .btnSignInOrSignUp {
    padding: 5px 10px 5px 10px;
    border-radius: 12px;
    background-color: ${themeColors.fond};
    border: none;
    cursor: pointer;
  }
`;

export default LoginSign;
