import React from "react";
import styled from "styled-components";

const HomeDescriptionMood = () => {
  return (
    <HomeDescriptionMoodStyled>
      <input type="text" placeholder="Une phrase pour décrire votre humeur" />
    </HomeDescriptionMoodStyled>
  );
};

const HomeDescriptionMoodStyled = styled.form``;

export default HomeDescriptionMood;
