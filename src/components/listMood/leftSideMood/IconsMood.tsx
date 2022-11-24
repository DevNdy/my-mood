import React from "react";
import styled from "styled-components";

const IconsMood = ({ data }: any) => {
  return (
    <IconsMoodStyled>
      {data === 1 ? (
        <i className="fa-solid fa-face-angry iAnger" style={{ color: "#950303" }}></i>
      ) : data === 2 ? (
        <i className="fa-solid fa-face-sad-tear iSad" style={{ color: "#353535" }}></i>
      ) : data === 3 ? (
        <i className="fa-solid fa-face-frown iNotHappy" style={{ color: "#9a6c3e" }}></i>
      ) : data === 4 ? (
        <i className="fa-solid fa-face-meh iNormal" style={{ color: "#e7a325" }}></i>
      ) : data === 5 ? (
        <i className="fa-solid fa-face-smile iHappy" style={{ color: "#56a9f1" }}></i>
      ) : data === 6 ? (
        <i className="fa-solid fa-face-laugh-beam iVeryHappy" style={{ color: "#32bb32" }}></i>
      ) : data === 7 ? (
        <i className="fa-solid fa-face-grin-hearts iLove" style={{ color: "#f25f77" }}></i>
      ) : (
        <></>
      )}
    </IconsMoodStyled>
  );
};

const IconsMoodStyled = styled.div`
  i {
    font-size: 28px;
    margin: 5px 0 0 10px;
  }
`;

export default IconsMood;
