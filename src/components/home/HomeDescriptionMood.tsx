import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { AuthContext } from "../../context/AuthContext";
import { AppContext } from "../../context/Context";

interface DescriptionProps {
  date: string;
  nbrIconMood: number;
  txtMood: string;
  color: string;
}

const HomeDescriptionMood = ({ date, nbrIconMood, txtMood, color }: DescriptionProps) => {
  const { currentUser } = useContext(AuthContext);
  const { dataMood, dateOfDay, countDataMood, setCountDataMood } = useContext(AppContext);
  const refDescription = useRef<HTMLInputElement>(null);
  const [messageErr, setMessageErr] = useState<string>("");
  const [dayOfDataMood, setDayOfDataMood] = useState<string[]>([]);

  const generateId = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

  useEffect(() => {
    const day = dataMood
      .filter((f: any) => f.email === currentUser.email && f.date === dateOfDay)
      .map((e: any) => e.date);
    setDayOfDataMood(day);
  }, [countDataMood]);

  async function handleSubmitMood(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (dayOfDataMood[0] !== dateOfDay && nbrIconMood !== 0) {
      try {
        await setDoc(doc(db, "mood", generateId), {
          date: date,
          iconNbr: nbrIconMood,
          txtMood: txtMood,
          description: refDescription.current!.value,
          name: currentUser.displayName,
          email: currentUser.email,
          id: generateId,
          color: color,
          times: Date.now(),
        });
        refDescription.current!.value = "";
        setMessageErr("Humeur enregistré.");
      } catch (err) {
        console.log(err);
        setMessageErr("une erreur c'est produite...");
      }
    } else {
      if (nbrIconMood === 0) {
        setMessageErr("Séléctionnez un icon s'il vous plaît..");
      } else {
        setMessageErr("vous avez déjà publié aujourd'hui...");
      }
    }
    setCountDataMood(countDataMood + 1);
  }

  return (
    <HomeDescriptionMoodStyled onSubmit={handleSubmitMood}>
      <div>
        <input
          type="text"
          placeholder="Une phrase pour décrire votre humeur.."
          ref={refDescription}
          required
        />
      </div>
      <button>sauvegarder</button>
      <p>{messageErr}</p>
    </HomeDescriptionMoodStyled>
  );
};

const HomeDescriptionMoodStyled = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    border-bottom: 0.5px solid black;
    input {
      width: 300px;
      border: none;

      &:focus {
        outline-color: ${themeColors.fond};
      }
    }
  }

  button {
    height: 25px;
    width: 200px;
    margin-top: 15px;
    background-color: ${themeColors.primaryColor};
    border-radius: 5px;
    border: 0.5px solid black;
    font-size: 1rem;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
  }

  p {
    font-size: 17px;
    color: #f15304;
  }

  @media (max-width: 1080px) {
    p {
      font-size: 15px;
    }
  }
`;

export default HomeDescriptionMood;
