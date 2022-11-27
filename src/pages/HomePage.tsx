import React, { useState } from "react";
import styled from "styled-components";
import HomeMoodDay from "../components/home/HomeMoodDay";
import MoodWindow from "../components/listMood/MoodWindow";
import NavBar from "../components/navbar/NavBar";
import { themeColors } from "../theme/theme";
import SocialNetworks from "../ui-reusable/SocialNetworks";

const HomePage = () => {
  const [openWindow, setOpenWindow] = useState(false);

  return (
    <HomePageStyled>
      <NavBar />
      <HomeMoodDay />
      <button onClick={() => setOpenWindow(!openWindow)} className="btnList">
        <i className={`${openWindow ? "fa-solid fa-x iList" : "fa-solid fa-list"} `}></i>
      </button>
      <MoodWindow openWindow={openWindow} />
      <div className="social">
        <SocialNetworks />
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .btnList {
    position: absolute;
    bottom: 20px;
    right: 20px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${themeColors.primaryColor};
    cursor: pointer;
    z-index: 20;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }

    i {
      font-size: 22px;
      transition: 1.5s;
    }

    .iList {
      transform: rotate(180deg);
    }
  }

  .social {
    position: absolute;
    bottom: 10px;
  }

  @media (max-width: 1080px) {
    min-height: 90vh;

    .btnList {
      top: 20px;
    }

    .social {
      position: fixed;
      bottom: 20px;
    }
  }
`;

export default HomePage;
