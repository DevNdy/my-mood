import React from "react";
import styled from "styled-components";
import { themeColors } from "../../../theme/theme";
import InputWithIcon from "../../../ui-reusable/InputWithIcon";

const SignUp = () => {
  return (
    <SignUpStyled>
      <h2>Créer un profil:</h2>
      <InputWithIcon
        icon={<i className="fa-solid fa-at"></i>}
        type="email"
        txtPlaceHolder="Veuillez entrer votre email.."
        reference={null}
      />
      <InputWithIcon
        icon={<i className="fa-solid fa-user"></i>}
        type="text"
        txtPlaceHolder="Choisissez un pseudo.."
        reference={null}
      />
      <InputWithIcon
        icon={<i className="fa-solid fa-eye-slash iPassword"></i>}
        type="password"
        txtPlaceHolder="Choisissez votre mot de passe.."
        reference={null}
      />
      <button>s'inscrire</button>
    </SignUpStyled>
  );
};

const SignUpStyled = styled.form`
  margin-top: 100px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    font-family: "Patrick Hand", cursive;
    font-size: 28px;
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

export default SignUp;
