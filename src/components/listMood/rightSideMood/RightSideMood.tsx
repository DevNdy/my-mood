import React, { useContext } from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { AppContext } from "../../../context/Context";
import { AuthContext } from "../../../context/AuthContext";
import { themeColors } from "../../../theme/theme";

const RightSideMood = () => {
  const { dataMood } = useContext(AppContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <RightSideMoodStyled>
      <div className="graph">
        <Doughnut
          datasetIdKey="id"
          data={{
            labels: dataMood
              .filter((f: any) => f.email === currentUser.email)
              .map((e: any) => [e.txtMood]),
            datasets: [
              {
                label: "Humeur",
                data: dataMood
                  .filter((f: any) => f.email === currentUser.email)
                  .map((e: any) => [e.iconNbr]),
                borderColor: dataMood
                  .filter((f: any) => f.email === currentUser.email)
                  .map((e: any) => [e.color]),
                backgroundColor: dataMood
                  .filter((f: any) => f.email === currentUser.email)
                  .map((e: any) => [e.color]),
                hoverBackgroundColor: "black",
                hoverBorderColor: "white",
                spacing: 2,
                weight: 1,
              },
            ],
          }}
        />
      </div>
    </RightSideMoodStyled>
  );
};

const RightSideMoodStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${themeColors.primaryColor};

  .graph {
    height: 500px;
    width: 500px;
    background-color: ${themeColors.primaryColor};
  }
`;

export default RightSideMood;
