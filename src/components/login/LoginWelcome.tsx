import React from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";

const LoginWelcome = () => {
  return (
    <LoginWelcomeStyled>
      <h1>
        Welcome to <span>MOOD</span>
      </h1>
      <p>Décrivez chaques jours votre humeur, voyez au fil du temps votre état mental...</p>
      <div>
        <i className="fa-solid fa-face-angry iAnger"></i>
        <i className="fa-solid fa-face-sad-tear iSad"></i>
        <i className="fa-solid fa-face-frown iNotHappy"></i>
        <i className="fa-solid fa-face-meh iNormal"></i>
        <i className="fa-solid fa-face-smile iHappy"></i>
        <i className="fa-solid fa-face-laugh-beam iVeryHappy"></i>
        <i className="fa-solid fa-face-grin-hearts iLove"></i>
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
  }
  i {
    font-size: 25px;
    margin: 8px;
    color: #a0a0a0;
    transition: 0.3s;
  }

  .iAnger {
    &:hover {
      color: ${themeColors.anger};
    }
  }

  .iSad {
    &:hover {
      color: ${themeColors.sad};
    }
  }

  .iNotHappy {
    &:hover {
      color: ${themeColors.notHappy};
    }
  }

  .iNormal {
    &:hover {
      color: ${themeColors.normal};
    }
  }
  .iHappy {
    &:hover {
      color: ${themeColors.happy};
    }
  }
  .iVeryHappy {
    &:hover {
      color: ${themeColors.veryHappy};
    }
  }

  .iLove {
    &:hover {
      color: ${themeColors.love};
    }
  }
`;

export default LoginWelcome;
