import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../context/Context";

const EditMood = () => {
  const { openEdit } = useContext(AppContext);
  return (
    <EditMoodStyled>
      <div className={`${openEdit ? "isOpen" : "isClose"}`}>
        <form>
          <h3>Editer l'humeur:</h3>
          <input type="text" placeholder="Changer la phrase.." />
        </form>
      </div>
    </EditMoodStyled>
  );
};

const EditMoodStyled = styled.div`
  margin: 15px;
  .isClose {
    height: 150px;
    width: 350px;
    background-color: red;
    transform: scaleX(0);
    transition: 1s;
  }

  .isOpen {
    height: 150px;
    width: 350px;
    background-color: red;
    transform: scaleX(1);
    transition: 1s;
  }
`;

export default EditMood;
