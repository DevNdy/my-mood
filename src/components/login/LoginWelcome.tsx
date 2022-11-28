import React from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";
import LoginIcons from "./LoginIcons";
import SocialNetworks from "../../ui-reusable/SocialNetworks";
import MoodTitleLogin from "../../ui-reusable/MoodTitleLogin";

const LoginWelcome = () => {
  return (
    <LoginWelcomeStyled>
      <MoodTitleLogin />
      <p>Décrivez chaque jour votre humeur, voyez au fil du temps votre état mental...</p>
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
