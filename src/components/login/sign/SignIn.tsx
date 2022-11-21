import React from "react";
import styled from "styled-components";
import { themeColors } from "../../../theme/theme";
import InputWithIcon from "../../../ui-reusable/InputWithIcon";

const SignIn = () => {
  return (
    <SignInStyled>
      <h2>- Connexion -</h2>
      <InputWithIcon
        icon={<i className="fa-solid fa-at"></i>}
        type="email"
        txtPlaceHolder="Veuillez entrer votre email.."
        reference={null}
      />
      <InputWithIcon
        icon={<i className="fa-solid fa-eye-slash"></i>}
        type="password"
        txtPlaceHolder="Veuillez entrer votre email.."
        reference={null}
      />

      <button>se connecter</button>
    </SignInStyled>
  );
};

const SignInStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    font-family: "Patrick Hand", cursive;
  }

  button {
    height: 28px;
    width: 210px;
    font-size: 1rem;
    font-weight: 600;
    background-color: ${themeColors.primaryColor};
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export default SignIn;
