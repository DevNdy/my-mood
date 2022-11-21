import React from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";

const HomeDescriptionMood = () => {
  return (
    <HomeDescriptionMoodStyled>
      <div>
        <input type="text" placeholder="Une phrase pour décrire votre humeur.." />
      </div>
      <button>sauvegarder</button>
    </HomeDescriptionMoodStyled>
  );
};

const HomeDescriptionMoodStyled = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    border-bottom: 0.5px solid black;
    input {
      width: 300px;
      border: none;

      &:focus {
        outline-color: ${themeColors.fond};
      }
    }
  }

  button {
    height: 25px;
    width: 200px;
    margin-top: 15px;
    background-color: ${themeColors.primaryColor};
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default HomeDescriptionMood;
