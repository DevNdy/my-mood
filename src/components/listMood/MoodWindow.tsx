import React from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";
import LeftSideMood from "./leftSideMood/LeftSideMood";
import ListMyMood from "./leftSideMood/ListMyMood";

interface MoodProps {
  openWindow: boolean;
}

const MoodWindow = ({ openWindow }: MoodProps) => {
  return (
    <MoodWindowStyled>
      <div className={`${openWindow ? "windowOpen" : "windowClose"}`}>
        <LeftSideMood />
      </div>
    </MoodWindowStyled>
  );
};

const MoodWindowStyled = styled.div`
  .windowOpen {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
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
    height: 100vh;
    width: 100vw;
    background-color: ${themeColors.primaryColor};
    z-index: 10;
    opacity: 0.5;
    transition: 2s;
    display: flex;
    flex-direction: row;
  }
`;

export default MoodWindow;
