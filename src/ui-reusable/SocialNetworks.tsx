import React from "react";
import styled from "styled-components";
import { themeColors } from "../theme/theme";

const SocialNetworks = () => {
  return (
    <SocialNetworksStyled>
      <a href="https://github.com/DevNdy" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github iGitHub"></i>
      </a>
      <a href="https://linkedin.com/in/kévin-naudy-b18a9b249" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin iLinkdin"></i>
      </a>
      <a
        href={`https://twitter.com/dev_ndy?t=BJsZoZ5vebP6gCCpW9zn7A&s=09`}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter iTwitter"></i>
      </a>
    </SocialNetworksStyled>
  );
};

const SocialNetworksStyled = styled.div`
  i {
    color: ${themeColors.black};
    font-size: 25px;
    margin-left: 20px;
    transition: 0.4s;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
`;

export default SocialNetworks;
