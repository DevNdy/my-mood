import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { AppContext } from "../../../context/Context";
import { AuthContext } from "../../../context/AuthContext";
import { themeColors } from "../../../theme/theme";
import DescriptionGraph from "./DescriptionGraph";

const RightSideMood = () => {
  const { dataMood } = useContext(AppContext);
  const { currentUser } = useContext(AuthContext);
  const [graphAnim, setGraphAnim] = useState(true);

  return (
    <RightSideMoodStyled>
      <div className="graph">
        <Line
          onClick={() => setGraphAnim(!graphAnim)}
          datasetIdKey="id"
          data={{
            labels: dataMood
              .filter((f: any) => f.email === currentUser.email)
              .map((e: any) => e.date)
              .reverse(),
            datasets: [
              {
                data: dataMood
                  .filter((f: any) => f.email === currentUser.email)
                  .map((e: any) => e.iconNbr),
                borderColor: "#d3d8d4",
                backgroundColor: dataMood
                  .filter((f: any) => f.email === currentUser.email)
                  .map((e: any) => [e.color]),
                hoverBackgroundColor: "black",
                hoverBorderColor: "white",
                pointBorderColor: dataMood
                  .filter((f: any) => f.email === currentUser.email)
                  .map((e: any) => [e.color]),
                pointBorderWidth: 7,
              },
            ],
          }}
          options={{
            animations: {
              tension: {
                duration: 2000,
                easing: "linear",
                from: 1,
                to: 0,
                loop: graphAnim,
              },
            },
            scales: {
              y: {
                min: 0,
                max: 8,
                title: {
                  display: true,
                  text: "Niveau d'humeur",
                  font: {
                    weight: "bold",
                  },
                },
              },
            },
            plugins: {
              title: {
                display: true,
                text: "Graphique de mes humeurs",
                font: {
                  size: 20,
                },
              },
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
      <DescriptionGraph />
    </RightSideMoodStyled>
  );
};

const RightSideMoodStyled = styled.div`
  min-height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${themeColors.primaryColor};

  .graph {
    width: 45vw;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${themeColors.fond};
    border-radius: 30px;
  }

  @media (max-width: 1080px) {
    width: 100vw;

    .graph {
      margin: 110px 5px 0 5px;
      min-height: 330px;
      width: 630px;
      transform: rotate(90deg);
    }
  }
`;

export default RightSideMood;
