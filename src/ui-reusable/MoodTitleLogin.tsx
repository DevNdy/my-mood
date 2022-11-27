import React from "react";
import styled from "styled-components";

const MoodTitleLogin = () => {
  return (
    <MoodTitleLoginStyled>
      Welcome to <span>MOOD</span>
    </MoodTitleLoginStyled>
  );
};

const MoodTitleLoginStyled = styled.h1`
  font-family: "Patrick Hand", cursive;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-family: "Rubik Microbe", cursive;
    font-size: 75px;
  }

  @media (max-width: 1080px) {
    margin-top: 70px;
  }
`;

export default MoodTitleLogin;
