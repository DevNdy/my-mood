import React from "react";
import styled from "styled-components";
import { themeColors } from "../../../theme/theme";

const DescriptionGraph = () => {
  return (
    <DescriptionGraphStyled>
      <p>
        "Suivez sous forme de graphique votre humeur. Sur l'axe Y nous retrouvons le niveau d'humeur
        et sur l'axe x le jour."
      </p>
      <p className="levelMood">
        Niveau d'humeur:
        <span>1: En colère</span>
        <span>2: Triste</span>
        <span>3: Pas content</span>
        <span>4: Normal</span>
        <span>5: Content</span>
        <span>6: Très content</span>
        <span>7: Euphorique</span>
      </p>
    </DescriptionGraphStyled>
  );
};

const DescriptionGraphStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 45vw;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    font-style: italic;
    opacity: 0.7;
    color: ${themeColors.black};
  }

  .levelMood {
    font-size: 22px;
    margin-top: 20px;
    opacity: 1;
    span {
      text-align: start;
      width: 130px;
      font-size: 15px;
    }
  }

  @media (max-width: 1080px) {
    margin-top: 100px;
    p {
      width: 90vw;
    }

    .levelMood {
      margin-bottom: 20px;
    }
  }
`;

export default DescriptionGraph;
