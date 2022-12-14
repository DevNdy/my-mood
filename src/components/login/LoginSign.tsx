import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";
import MoodTitleLogin from "../../ui-reusable/MoodTitleLogin";
import SignIn from "./sign/SignIn";
import SignUp from "./sign/SignUp";

const LoginSign = () => {
  const [signInOrSignUp, setSignInOrSignUp] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1080px)" });

  return (
    <LoginSignStyled>
      {isTabletOrMobile ? <MoodTitleLogin /> : <></>}
      {signInOrSignUp ? <SignUp /> : <SignIn />}
      <button onClick={() => setSignInOrSignUp(!signInOrSignUp)} className="btnSignInOrSignUp">
        {signInOrSignUp ? "Déjà inscrit?" : "Pas encore de profil?"}
      </button>
      <p className="identifiant">
        Identifiants compte modèle:
        <span>
          <strong>email:</strong> kevin@gmail.com
        </span>
        <span>
          <strong>mot de passe:</strong> azerty
        </span>
      </p>
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
    margin-bottom: 70px;
    padding: 5px 10px 5px 10px;
    border-radius: 12px;
    background-color: ${themeColors.fond};
    border: 0.5px solid ${themeColors.fond};
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      background-color: ${themeColors.primaryColor};
      border: 0.5px solid ${themeColors.black};
    }
  }

  .identifiant {
    position: absolute;
    bottom: 10px;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 800;
    background-color: ${themeColors.primaryColor};
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      width: 180px;
      margin-top: 5px;
      font-size: 15px;
      font-weight: 400;
    }
  }

  @media (max-width: 1080px) {
    width: 100vw;
    justify-content: flex-start;

    .identifiant {
      position: static;
      margin-top: 40px;
    }
  }
`;

export default LoginSign;
