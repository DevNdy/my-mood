import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { AppContext } from "../../../context/Context";
import { AuthContext } from "../../../context/AuthContext";
import { themeColors } from "../../../theme/theme";

const RightSideMood = () => {
  const { dataMood, dateOfDay } = useContext(AppContext);
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
              .map((e: any) => e.date),
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
      <p>
        "Suivez sous forme de graphique votre humeur, sur l'axe Y nous retrouvons le niveau
        d'humeur.Sur l'axe x le jour."
      </p>
      <p className="levelMood">
        Niveau d'humeur:
        <span>1: En colère</span>
        <span>2: Triste</span>
        <span>3: Pas content</span>
        <span>4: Normal</span>
        <span>5: Content</span>
        <span>6: Très content</span>
        <span>7: Euphorique</span>
      </p>
    </RightSideMoodStyled>
  );
};

const RightSideMoodStyled = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${themeColors.primaryColor};

  .graph {
    min-height: 350px;
    width: 45vw;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${themeColors.fond};
    border-radius: 30px;
  }

  p {
    width: 45vw;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    font-style: italic;
    opacity: 0.7;
    color: ${themeColors.black};
  }

  .levelMood {
    font-size: 22px;
    margin-top: 20px;
    opacity: 1;
    span {
      text-align: start;
      width: 130px;
      font-size: 15px;
    }
  }
`;

export default RightSideMood;
