import React from "react";
import styled from "styled-components";
import HomeMoodDay from "../components/home/HomeMoodDay";
import NavBar from "../components/navbar/NavBar";

const HomePage = () => {
  return (
    <HomePageStyled>
      <NavBar />
      <HomeMoodDay />
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
`;

export default HomePage;
