import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../../firebase-config";
import { themeColors } from "../../../theme/theme";
import InputWithIcon from "../../../ui-reusable/InputWithIcon";

const SignIn = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [messageErr, setMessageErr] = useState<string>("");
  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function handleSubmitSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(refEmail.current!.value, refPassword.current!.value);
      navigate("/home");
      setMessageErr("");
    } catch (err) {
      console.log(err);
      setMessageErr("Email ou mot de passe invalide.");
    }
  }
  return (
    <SignInStyled onSubmit={handleSubmitSignIn}>
      <h2>Accéder à votre profil:</h2>
      <InputWithIcon
        icon={<i className="fa-solid fa-at"></i>}
        type="email"
        txtPlaceHolder="Veuillez entrer votre email.."
        reference={refEmail}
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
        reference={refPassword}
      />
      <button>Se connecter</button>
      <p>{messageErr}</p>
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

  p {
    font-size: 13px;
    color: red;
    font-style: italic;
  }
`;

export default SignIn;
