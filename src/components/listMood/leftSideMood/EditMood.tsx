import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/Context";
import { themeColors } from "../../../theme/theme";
import HomeIconsMood from "../../home/HomeIconsMood";

interface IconMoodEditProps {
  nbr: number;
  txt: string;
  color: string;
}

const EditMood = () => {
  const { openEdit, moodDataSelected } = useContext(AppContext);
  const [iconMoodEdit, setIconMoodEdit] = useState<IconMoodEditProps>({
    nbr: 0,
    txt: "--",
    color: "",
  });

  function handleClickEditIconsMood(iSelect: number, txt: string, color: string) {
    setIconMoodEdit({
      nbr: iSelect,
      txt: txt,
      color: color,
    });
    console.log(iconMoodEdit);
  }

  return (
    <EditMoodStyled>
      <div className={`${openEdit ? "isOpen" : "isClose"}`}>
        <form>
          <h3>Editer l'humeur du {moodDataSelected.date}:</h3>
          <input type="text" placeholder="Changer la phrase.." />
          <HomeIconsMood
            iconMoodSelect={iconMoodEdit}
            onClickAnger={() => handleClickEditIconsMood(1, "En colère", "#950303")}
            onClickSad={() => handleClickEditIconsMood(2, "Triste", "#353535")}
            onClickNotHappy={() => handleClickEditIconsMood(3, "Pas content", "#9a6c3e")}
            onClickNormal={() => handleClickEditIconsMood(4, "Normal", "#e7a325")}
            onClickHappy={() => handleClickEditIconsMood(5, "Content", "#56a9f1")}
            onClickVeryHappy={() => handleClickEditIconsMood(6, "Très content", "#32bb32")}
            onClickVeryLove={() =>
              handleClickEditIconsMood(7, "Euphorique/Excité/Amoureux", "#f25f77")
            }
            className="iconsStyle"
          />
          <button>Sauvegarder les modifications</button>
        </form>
      </div>
    </EditMoodStyled>
  );
};

const EditMoodStyled = styled.div`
  margin: 15px;

  .isClose {
    height: 150px;
    width: 395px;
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
        margin: 0;
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
    }
  }

  .isOpen {
    height: 150px;
    width: 395px;
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
        margin: 0;
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
    }
  }
`;

export default EditMood;
