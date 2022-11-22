import React from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";

interface ListMoodProps {
  openWindow: boolean;
}

const ListMoodWindow = ({ openWindow }: ListMoodProps) => {
  return (
    <ListMoodWindowStyled>
      <div className={`${openWindow ? "windowOpen" : "windowClose"}`}>hello</div>
    </ListMoodWindowStyled>
  );
};

const ListMoodWindowStyled = styled.div`
  .windowOpen {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${themeColors.primaryColor};
    z-index: 10;
    transition: 1.5s;
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
  }
`;

export default ListMoodWindow;
