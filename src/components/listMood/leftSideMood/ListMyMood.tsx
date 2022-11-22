import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../../context/AuthContext";
import { AppContext } from "../../../context/Context";

interface ListMoodProps {
  txtMood: string;
  iconNbr: number;
  email: string;
  name: string;
  date: string;
  description: string;
}

const ListMyMood = () => {
  const { dataMood } = useContext(AppContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <ListMyMoodStyled>
      {dataMood.map((e: ListMoodProps) =>
        e.email === currentUser.email ? (
          <div className="divMood">
            {e.iconNbr === 1 ? (
              <i className="fa-solid fa-face-angry iAnger" style={{ color: "#950303" }}></i>
            ) : e.iconNbr === 2 ? (
              <i className="fa-solid fa-face-sad-tear iSad" style={{ color: "#353535" }}></i>
            ) : e.iconNbr === 3 ? (
              <i className="fa-solid fa-face-frown iNotHappy" style={{ color: "#9a6c3e" }}></i>
            ) : e.iconNbr === 4 ? (
              <i className="fa-solid fa-face-meh iNormal" style={{ color: "#e7a325" }}></i>
            ) : e.iconNbr === 5 ? (
              <i className="fa-solid fa-face-smile iHappy" style={{ color: "#56a9f1" }}></i>
            ) : e.iconNbr === 6 ? (
              <i
                className="fa-solid fa-face-laugh-beam iVeryHappy"
                style={{ color: "#32bb32" }}
              ></i>
            ) : e.iconNbr === 7 ? (
              <i className="fa-solid fa-face-grin-hearts iLove" style={{ color: "#f25f77" }}></i>
            ) : (
              <></>
            )}
            <h3>
              {" "}
              <span>{e.date}</span> {e.description}
            </h3>
            <i className="fa-solid fa-pen iEdit"></i>
            <i className="fa-solid fa-trash idelete"></i>
          </div>
        ) : (
          <></>
        )
      )}
    </ListMyMoodStyled>
  );
};

const ListMyMoodStyled = styled.div`
  height: 70vh;
  width: 50vw;
  border-right: 0.5px solid black;
  margin-top: 30px;

  .divMood {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 15px 40px 0 50px;
    background-color: white;
    border-radius: 30px;
    transition: 0.4s;

    i {
      font-size: 25px;
      margin-left: 10px;
    }

    .iEdit {
      font-size: 18px;
      border: 0.5px solid black;
      padding: 7px;
      border-radius: 50%;
      cursor: pointer;
    }

    .idelete {
      font-size: 18px;
      margin-left: 20px;
      color: #7c0202;
      border: 0.5px solid black;
      padding: 7px;
      border-radius: 50%;
      cursor: pointer;
    }

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
`;

export default ListMyMood;
