import React from "react";
import styled from "styled-components";
import ListMyMood from "./ListMyMood";

const LeftSideMood = () => {
  return (
    <LeftSideMoodStyled>
      <h2>- Toutes mes humeurs -</h2>
      <ListMyMood />
    </LeftSideMoodStyled>
  );
};

const LeftSideMoodStyled = styled.div`
  height: 100vh;
  width: 50vw;
  border-right: 0.5px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 40px;
    margin-top: 30px;
  }
`;

export default LeftSideMood;
