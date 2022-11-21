import React, { useState } from "react";
import styled from "styled-components";
import { themeColors } from "../../theme/theme";
import HomeIconsMood from "./HomeIconsMood";
import HomeMoodSelectTxt from "./HomeMoodSelectTxt";

const HomeMoodDay = () => {
  const date = new Date();
  const options: {} = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
  const [iconMoodSelect, setIconMoodSelect] = useState(0);

  function handleClickSelectIconsMood(iSelect: number) {
    setIconMoodSelect(iSelect);
  }

  return (
    <HomeMoodDayStyled>
      <h3>
        Humeur du jour <span>{date.toLocaleDateString("fr-FR", options)}</span>
      </h3>
      <HomeIconsMood
        iconMoodSelect={iconMoodSelect}
        onClickAnger={() => handleClickSelectIconsMood(1)}
        onClickSad={() => handleClickSelectIconsMood(2)}
        onClickNotHappy={() => handleClickSelectIconsMood(3)}
        onClickNormal={() => handleClickSelectIconsMood(4)}
        onClickHappy={() => handleClickSelectIconsMood(5)}
        onClickVeryHappy={() => handleClickSelectIconsMood(6)}
        onClickVeryLove={() => handleClickSelectIconsMood(7)}
      />
      <HomeMoodSelectTxt iconMoodSelect={iconMoodSelect} />
    </HomeMoodDayStyled>
  );
};

const HomeMoodDayStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-size: 25px;
      font-weight: 200;
      opacity: 0.7;
    }
  }
`;

export default HomeMoodDay;
