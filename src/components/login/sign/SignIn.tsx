import React, { useState } from "react";
import styled from "styled-components";
import { themeColors } from "../../../theme/theme";
import InputWithIcon from "../../../ui-reusable/InputWithIcon";

const SignIn = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  return (
    <SignInStyled>
      <h2>Accéder à votre profil:</h2>
      <InputWithIcon
        icon={<i className="fa-solid fa-at"></i>}
        type="email"
        txtPlaceHolder="Veuillez entrer votre email.."
        reference={null}
      />
      <InputWithIcon
        icon={
          passwordVisibility ? (
            <i
              onClick={() => setPasswordVisibility(!passwordVisibility)}
              className="fa-solid fa-eye"
            ></i>
          ) : (
            <i
              onClick={() => setPasswordVisibility(!passwordVisibility)}
              className="fa-solid fa-eye-slash iPassword"
            ></i>
          )
        }
        type={passwordVisibility ? "text" : "password"}
        txtPlaceHolder="Entrez votre mot de passe.."
        reference={null}
      />
      <button>Se connecter</button>
    </SignInStyled>
  );
};

const SignInStyled = styled.form`
  margin-top: 100px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 28px;
    font-family: "Patrick Hand", cursive;
  }

  .iPassword {
    cursor: pointer;
  }

  button {
    height: 28px;
    width: 235px;
    font-size: 1rem;
    font-weight: 600;
    background-color: ${themeColors.primaryColor};
    border-radius: 5px;
    border: 1px solid black;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export default SignIn;
