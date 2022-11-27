import React from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";
import LeftSideMood from "./leftSideMood/LeftSideMood";
import RightSideMood from "./rightSideMood/RightSideMood";

interface MoodProps {
  openWindow: boolean;
}

const MoodWindow = ({ openWindow }: MoodProps) => {
  return (
    <MoodWindowStyled>
      <div className={`${openWindow ? "windowOpen" : "windowClose"}`}>
        <LeftSideMood />
        <RightSideMood />
      </div>
    </MoodWindowStyled>
  );
};

const MoodWindowStyled = styled.div`
  .windowOpen {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100vw;
    background-color: ${themeColors.primaryColor};
    z-index: 10;
    transition: 1.5s;
    display: flex;
    flex-direction: row;
  }

  .windowClose {
    position: absolute;
    top: -1500px;
    left: 0;
    min-height: 100vh;
    width: 100vw;
    background-color: ${themeColors.primaryColor};
    z-index: 10;
    opacity: 0.5;
    transition: 2s;
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 1080px) {
    .windowOpen {
      flex-direction: column;
      transition: 2.5s;
    }

    .windowClose {
      flex-direction: column;
      top: -2000px;
      transition: 2.5s;
      opacity: 0.9;
    }
  }
`;

export default MoodWindow;
