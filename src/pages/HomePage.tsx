import React from "react";
import styled from "styled-components";
import NavBar from "../components/navbar/NavBar";

const HomePage = () => {
  return (
    <HomePageStyled>
      <NavBar />
    </HomePageStyled>
  );
};

const HomePageStyled = styled.div`
  height: 100vh;
`;

export default HomePage;
