import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase-config";

const HomePage = () => {
  const navigate = useNavigate();

  function handleLogOut() {
    try {
      auth.signOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <HomePageStyled>
      <button onClick={handleLogOut}>deco</button>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.div`
  height: 100vh;
`;

export default HomePage;
