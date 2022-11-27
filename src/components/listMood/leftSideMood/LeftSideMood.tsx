import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import EditMood from "./EditMood";
import ListMyMood from "./ListMyMood";

const LeftSideMood = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1080px)" });
  return (
    <LeftSideMoodStyled>
      <h2>- Toutes mes humeurs -</h2>
      <ListMyMood />
      <EditMood />
      {isTabletOrMobile ? <p>Mood by @DevNdy</p> : <></>}
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

  @media (max-width: 1080px) {
    width: 100vw;
    border-right: none;

    h2 {
      font-size: 28px;
      margin-top: 80px;
    }

    p {
      position: relative;
      top: -150px;
      z-index: -1;
    }
  }
`;

export default LeftSideMood;
