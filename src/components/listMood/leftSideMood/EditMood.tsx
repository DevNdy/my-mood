import { doc, updateDoc } from "firebase/firestore";
import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/Context";
import { db } from "../../../firebase-config";
import { themeColors } from "../../../theme/theme";
import HomeIconsMood from "../../home/HomeIconsMood";

interface IconMoodEditProps {
  nbr: number;
  txt: string;
}

const EditMood = () => {
  const { openEdit, setOpenEdit, moodDataSelected } = useContext(AppContext);
  const [iconMoodEdit, setIconMoodEdit] = useState<IconMoodEditProps>({
    nbr: 0,
    txt: "--",
  });
  const [messageErr, setMessageErr] = useState<string>("");
  const refDescription = useRef<HTMLInputElement>(null);

  function handleClickEditIconsMood(iSelect: number, txt: string) {
    setIconMoodEdit({
      nbr: iSelect,
      txt: txt,
    });
    console.log(iconMoodEdit);
  }

  async function handleSubmitUpdateMood(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (iconMoodEdit.nbr !== 0) {
      try {
        await updateDoc(doc(db, "mood", `${moodDataSelected.id}`), {
          description: refDescription.current!.value,
          iconNbr: iconMoodEdit.nbr,
          txtMood: iconMoodEdit.txt,
        });
        refDescription.current!.value = "";
        setIconMoodEdit({
          nbr: 0,
          txt: "",
        });
        setOpenEdit(!openEdit);
        setMessageErr("");
      } catch (err) {
        console.log(err);
      }
    } else {
      setMessageErr("Oups, vous avez oublié l'émoticon..");
    }
  }

  return (
    <EditMoodStyled>
      <div className={`${openEdit ? "isOpen" : "isClose"}`}>
        <form onSubmit={handleSubmitUpdateMood}>
          <h3>
            Editer l'humeur du {moodDataSelected.date}:{" "}
            <i onClick={() => setOpenEdit(false)} className="fa-solid fa-xmark iClose"></i>
          </h3>
          <input type="text" placeholder="Changer la phrase.." ref={refDescription} required />
          <HomeIconsMood
            iconMoodSelect={iconMoodEdit}
            onClickAnger={() => handleClickEditIconsMood(1, "En colère")}
            onClickSad={() => handleClickEditIconsMood(2, "Triste")}
            onClickNotHappy={() => handleClickEditIconsMood(3, "Pas content")}
            onClickNormal={() => handleClickEditIconsMood(4, "Normal")}
            onClickHappy={() => handleClickEditIconsMood(5, "Content")}
            onClickVeryHappy={() => handleClickEditIconsMood(6, "Très content")}
            onClickVeryLove={() => handleClickEditIconsMood(7, "Euphorique/Excité/Amoureux")}
            className="iconsStyle"
          />
          <button>Sauvegarder les modifications</button>
          <p>{messageErr}</p>
        </form>
      </div>
    </EditMoodStyled>
  );
};

const EditMoodStyled = styled.div`
  margin: 15px;

  .isClose {
    height: 180px;
    width: 445px;
    border-radius: 22px;
    background-color: ${themeColors.fond};
    transform: scaleX(0);
    transition: 1s;

    form {
      margin: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        width: 100%;
        margin: 5px 0 0 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .iClose {
          height: 25px;
          width: 25px;
          margin-top: 5px;
          padding: 2px;
          color: ${themeColors.black};
          background-color: ${themeColors.primaryColor};
          border-radius: 50%;
          border: 0.5px solid ${themeColors.black};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }

      input {
        height: 25px;
        width: 300px;
        margin-top: 10px;
        padding-left: 5px;
        border-radius: 5px;
        border: 1px solid gray;
      }
      .iconsStyle {
        i {
          font-size: 20px;
          margin: 15px 5px 0 5px;
          color: gray;
        }
      }

      button {
        margin-top: 10px;
        background-color: ${themeColors.primaryColor};
        border: 1px solid black;
        border-radius: 5px;
        padding: 3px 10px 3px 10px;
        opacity: 0.7;
      }
      p {
        color: red;
        font-size: 14px;
        margin: 5px;
      }
    }
  }

  .isOpen {
    height: 180px;
    width: 445px;
    border-radius: 22px;
    background-color: ${themeColors.fond};
    transform: scaleX(1);
    transition: 1s;
    form {
      margin: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        width: 100%;
        margin: 5px 0 0 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .iClose {
          height: 25px;
          width: 25px;
          margin-top: 5px;
          padding: 2px;
          color: ${themeColors.black};
          background-color: ${themeColors.primaryColor};
          border-radius: 50%;
          border: 0.5px solid ${themeColors.black};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }

      input {
        height: 25px;
        width: 300px;
        margin-top: 10px;
        padding-left: 5px;
        border-radius: 5px;
        border: 1px solid gray;
        &:focus {
          outline-color: ${themeColors.primaryColor};
        }
      }

      .iconsStyle {
        i {
          font-size: 20px;
          margin: 15px 5px 0 5px;
          color: gray;
        }
      }

      button {
        margin-top: 10px;
        background-color: ${themeColors.primaryColor};
        border: 1px solid black;
        border-radius: 5px;
        padding: 3px 10px 3px 10px;
        opacity: 0.7;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          opacity: 1;
        }
      }
      p {
        margin: 5px;
        color: red;
        font-size: 14px;
      }
    }
  }
`;

export default EditMood;
