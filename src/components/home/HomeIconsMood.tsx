import React from "react";
import styled from "styled-components";

interface HomeIconsMoodProps {
  iconMoodSelect: { nbr: number };
  onClickAnger: () => void;
  onClickSad: () => void;
  onClickNotHappy: () => void;
  onClickNormal: () => void;
  onClickHappy: () => void;
  onClickVeryHappy: () => void;
  onClickVeryLove: () => void;
}

const HomeIconsMood = ({
  iconMoodSelect,
  onClickSad,
  onClickAnger,
  onClickNotHappy,
  onClickNormal,
  onClickHappy,
  onClickVeryHappy,
  onClickVeryLove,
}: HomeIconsMoodProps) => {
  return (
    <HomeIconsMoodStyled>
      <i
        onClick={onClickAnger}
        style={{ color: `${iconMoodSelect.nbr === 1 ? "#950303" : ""}` }}
        className="fa-solid fa-face-angry iAnger"
      ></i>
      <i
        onClick={onClickSad}
        style={{ color: `${iconMoodSelect.nbr === 2 ? "#353535" : ""}` }}
        className="fa-solid fa-face-sad-tear iSad"
      ></i>
      <i
        onClick={onClickNotHappy}
        style={{ color: `${iconMoodSelect.nbr === 3 ? "#9a6c3e" : ""}` }}
        className="fa-solid fa-face-frown iNotHappy"
      ></i>
      <i
        onClick={onClickNormal}
        style={{ color: `${iconMoodSelect.nbr === 4 ? "#e7a325" : ""}` }}
        className="fa-solid fa-face-meh iNormal"
      ></i>
      <i
        onClick={onClickHappy}
        style={{ color: `${iconMoodSelect.nbr === 5 ? "#56a9f1" : ""}` }}
        className="fa-solid fa-face-smile iHappy"
      ></i>
      <i
        onClick={onClickVeryHappy}
        style={{ color: `${iconMoodSelect.nbr === 6 ? "#32bb32" : ""}` }}
        className="fa-solid fa-face-laugh-beam iVeryHappy"
      ></i>
      <i
        onClick={onClickVeryLove}
        style={{ color: `${iconMoodSelect.nbr === 7 ? "#f25f77" : ""}` }}
        className="fa-solid fa-face-grin-hearts iLove"
      ></i>
    </HomeIconsMoodStyled>
  );
};

const HomeIconsMoodStyled = styled.div`
  i {
    color: gray;
    font-size: 40px;
    margin-left: 20px;
    cursor: pointer;
  }
`;

export default HomeIconsMood;
