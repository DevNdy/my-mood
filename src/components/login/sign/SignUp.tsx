import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../../firebase-config";
import { themeColors } from "../../../theme/theme";
import InputWithIcon from "../../../ui-reusable/InputWithIcon";

const SignUp = () => {
  const navigate = useNavigate();
  const [passwordVisibilitySignUp, setPasswordVisibility] = useState(false);
  const [messageErr, setMessageErr] = useState<string>("");
  const refEmail = useRef<HTMLInputElement>(null);
  const refPseudo = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);

  async function handleSubmitNewUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (refPassword.current!.value.length < 6) {
      setMessageErr("Password: 6 caractères min.");
      return;
    }

    try {
      auth
        .createUserWithEmailAndPassword(refEmail.current!.value, refPassword.current!.value)
        .then(async (userAuth) => {
          await userAuth.user!.updateProfile({
            displayName: refPseudo.current!.value.toLowerCase(),
          });
          navigate("/home");
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <SignUpStyled onSubmit={handleSubmitNewUser}>
      <h2>Créer un profil:</h2>
      <InputWithIcon
        icon={<i className="fa-solid fa-at"></i>}
        type="email"
        txtPlaceHolder="Veuillez entrer votre email.."
        reference={refEmail}
      />
      <InputWithIcon
        icon={<i className="fa-solid fa-user"></i>}
        type="text"
        txtPlaceHolder="Choisissez un pseudo.."
        reference={refPseudo}
      />
      <InputWithIcon
        icon={
          passwordVisibilitySignUp ? (
            <i
              onClick={() => setPasswordVisibility(!passwordVisibilitySignUp)}
              className="fa-solid fa-eye"
            ></i>
          ) : (
            <i
              onClick={() => setPasswordVisibility(!passwordVisibilitySignUp)}
              className="fa-solid fa-eye-slash iPassword"
            ></i>
          )
        }
        type={passwordVisibilitySignUp ? "text" : "password"}
        txtPlaceHolder="Choisissez votre mot de passe.."
        reference={refPassword}
      />
      <button>S'inscrire</button>
      <p>{messageErr}</p>
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

  p {
    font-size: 15px;
    color: red;
    font-style: italic;
  }
`;

export default SignUp;
