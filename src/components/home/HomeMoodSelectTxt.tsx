import React from "react";
import styled from "styled-components";

interface HomeMoodSelectTxtProps {
  iconMoodSelect: number;
}

const HomeMoodSelectTxt = ({ iconMoodSelect }: HomeMoodSelectTxtProps) => {
  return (
    <HomeMoodSelectTxtStyled>
      -{" "}
      {iconMoodSelect === 1
        ? "En colère"
        : iconMoodSelect === 2
        ? "Triste"
        : iconMoodSelect === 3
        ? "Pas content"
        : iconMoodSelect === 4
        ? "Normal"
        : iconMoodSelect === 5
        ? "Content"
        : iconMoodSelect === 6
        ? "Très content"
        : iconMoodSelect === 7
        ? "Euphorique/Excité/Amoureux"
        : ""}{" "}
      -
    </HomeMoodSelectTxtStyled>
  );
};

const HomeMoodSelectTxtStyled = styled.div`
  margin-top: 15px;
  font-size: 25px;
  font-weight: bold;
`;

export default HomeMoodSelectTxt;
