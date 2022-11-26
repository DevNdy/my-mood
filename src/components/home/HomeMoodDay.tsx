import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/Context";
import HomeDescriptionMood from "./HomeDescriptionMood";
import HomeIconsMood from "./HomeIconsMood";

export interface IconMoodSelectProps {
  nbr: number;
  txt: string;
  color: string;
}

const HomeMoodDay = () => {
  const { dateOfDay } = useContext(AppContext);

  //date format long
  const date = new Date();
  const options: {} = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
  const dateOfDayLong = date.toLocaleDateString("fr-FR", options);

  const [iconMoodSelect, setIconMoodSelect] = useState<IconMoodSelectProps>({
    nbr: 0,
    txt: "--",
    color: "",
  });

  function handleClickSelectIconsMood(iSelect: number, txt: string, color: string) {
    setIconMoodSelect({
      nbr: iSelect,
      txt: txt,
      color: color,
    });
    console.log(iconMoodSelect);
  }

  return (
    <HomeMoodDayStyled>
      <h3>
        Humeur du jour <span>( {dateOfDayLong} )</span>
      </h3>
      <HomeIconsMood
        iconMoodSelect={iconMoodSelect}
        onClickAnger={() => handleClickSelectIconsMood(1, "En colère", "#950303")}
        onClickSad={() => handleClickSelectIconsMood(2, "Triste", "#353535")}
        onClickNotHappy={() => handleClickSelectIconsMood(3, "Pas content", "#9a6c3e")}
        onClickNormal={() => handleClickSelectIconsMood(4, "Normal", "#e7a325")}
        onClickHappy={() => handleClickSelectIconsMood(5, "Content", "#56a9f1")}
        onClickVeryHappy={() => handleClickSelectIconsMood(6, "Très content", "#32bb32")}
        onClickVeryLove={() => handleClickSelectIconsMood(7, "Euphorique/Amoureux", "#f25f77")}
        className="classNameIcon"
      />
      <p>{iconMoodSelect.txt}</p>
      <HomeDescriptionMood
        date={dateOfDay}
        nbrIconMood={iconMoodSelect.nbr}
        txtMood={iconMoodSelect.txt}
        color={iconMoodSelect.color}
      />
    </HomeMoodDayStyled>
  );
};

const HomeMoodDayStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-size: 1rem;
      font-style: italic;
      font-weight: 100;
      opacity: 0.7;
      font-family: Arial, Helvetica, sans-serif;
    }
  }

  p {
    margin: 15px;
    font-size: 25px;
    font-weight: bold;
  }

  .classNameIcon {
    i {
      color: #adadad;
      font-size: 40px;
      margin-left: 20px;
      cursor: pointer;
    }
  }
`;

export default HomeMoodDay;
