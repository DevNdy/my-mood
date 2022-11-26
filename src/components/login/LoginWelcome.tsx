import React from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";
import LoginIcons from "./LoginIcons";
import SocialNetworks from "../../ui-reusable/SocialNetworks";

const LoginWelcome = () => {
  return (
    <LoginWelcomeStyled>
      <h1>
        Welcome to <span>MOOD</span>
      </h1>
      <p>Décrivez chaques jours votre humeur, voyez au fil du temps votre état mental...</p>
      <LoginIcons />
      <div className="networks">
        <SocialNetworks />
      </div>
    </LoginWelcomeStyled>
  );
};

const LoginWelcomeStyled = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: ${themeColors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Patrick Hand", cursive;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      font-family: "Rubik Microbe", cursive;
      font-size: 75px;
    }
  }

  p {
    font-size: 19px;
    margin: 30px 10px 30px 10px;
  }

  .networks {
    position: fixed;
    bottom: 10px;
  }
`;

export default LoginWelcome;
