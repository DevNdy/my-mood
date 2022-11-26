import React from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";

const LoginIcons = () => {
  return (
    <LoginIconsStyled>
      <i className="fa-solid fa-face-angry iAnger"></i>
      <i className="fa-solid fa-face-sad-tear iSad"></i>
      <i className="fa-solid fa-face-frown iNotHappy"></i>
      <i className="fa-solid fa-face-meh iNormal"></i>
      <i className="fa-solid fa-face-smile iHappy"></i>
      <i className="fa-solid fa-face-laugh-beam iVeryHappy"></i>
      <i className="fa-solid fa-face-grin-hearts iLove"></i>
    </LoginIconsStyled>
  );
};

const LoginIconsStyled = styled.div`
  margin-bottom: 70px;
  i {
    font-size: 25px;
    margin: 8px;
    color: #a0a0a0;
    transition: 0.3s;
  }

  .iAnger {
    &:hover {
      color: ${themeColors.anger};
    }
  }

  .iSad {
    &:hover {
      color: ${themeColors.sad};
    }
  }

  .iNotHappy {
    &:hover {
      color: ${themeColors.notHappy};
    }
  }

  .iNormal {
    &:hover {
      color: ${themeColors.normal};
    }
  }
  .iHappy {
    &:hover {
      color: ${themeColors.happy};
    }
  }
  .iVeryHappy {
    &:hover {
      color: ${themeColors.veryHappy};
    }
  }

  .iLove {
    &:hover {
      color: ${themeColors.love};
    }
  }
`;

export default LoginIcons;
