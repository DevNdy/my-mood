import { deleteDoc, doc } from "firebase/firestore";
import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../../context/AuthContext";
import { AppContext } from "../../../context/Context";
import { db } from "../../../firebase-config";
import IconsMood from "./IconsMood";

interface ListMoodProps {
  id: string;
  txtMood: string;
  iconNbr: number;
  email: string;
  name: string;
  date: string;
  description: string;
}

const ListMyMood = () => {
  const { dataMood, setMoodDataSelected, setOpenEdit, setCountDataMood, countDataMood } =
    useContext(AppContext);
  const { currentUser } = useContext(AuthContext);

  function handleClickEditMood(date: string, id: string, email: string) {
    setOpenEdit(true);
    setMoodDataSelected({
      date,
      id,
      email,
    });
  }

  function handleClickDeleteItem(id: string) {
    deleteDoc(doc(db, "mood", `${id}`));
    setCountDataMood(countDataMood + 1);
    document.location.reload();
  }

  return (
    <ListMyMoodStyled>
      {dataMood.map((e: ListMoodProps, i: number) =>
        e.email === currentUser.email ? (
          <div key={i} className="divMood">
            <IconsMood data={e.iconNbr} />
            <h3>
              {" "}
              <span>{e.date}</span> {e.description}
            </h3>
            <i
              onClick={() => handleClickEditMood(e.date, e.id, e.email)}
              className="fa-solid fa-pen iEdit"
            ></i>
            <i
              className="fa-solid fa-trash idelete"
              onClick={() => handleClickDeleteItem(e.id)}
            ></i>
          </div>
        ) : (
          <div key={i}></div>
        )
      )}
    </ListMyMoodStyled>
  );
};

const ListMyMoodStyled = styled.div`
  height: 60vh;
  width: 50vw;
  border-right: 0.5px solid black;
  margin-top: 10px;
  overflow-y: scroll;

  .divMood {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 15px 40px 0 50px;
    background-color: white;
    border-radius: 30px;
    transition: 0.4s;

    h3 {
      margin: 0 0 0 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 470px;

      span {
        font-size: 15px;
        font-weight: 100;
        opacity: 0.8;
      }
    }
  }

  .iEdit {
    font-size: 18px;
    border: 0.5px solid black;
    margin-left: 15px;
    padding: 7px;
    border-radius: 50%;
    cursor: pointer;
  }

  .idelete {
    font-size: 18px;
    margin: 0 10px 0 10px;
    color: #7c0202;
    border: 0.5px solid black;
    padding: 7px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default ListMyMood;
