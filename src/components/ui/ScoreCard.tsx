import type { CSSProperties } from "react";
import { typography } from "../../styles/theme";
import checkMark from "../../assets/icons/check-mark.svg";
import wrongMark from "../../assets/icons/wrong-mark.svg";
import boxMark from "../../assets/icons/box-mark.svg";
import CircleIcon from "./circle-icon";

interface ScoreCardProps {
  scoreType: "right" | "wrong" | "total";
  numberProps: number | null;
}

export default function ScoreCard({ scoreType, numberProps }: ScoreCardProps) {
  const styles: {
    right: CSSProperties;
    total: CSSProperties;
    wrong: CSSProperties;
    scoreCard: CSSProperties;
    scoreText: CSSProperties;
    circleIcon: CSSProperties;
    number: CSSProperties;
  } = {
    right: {
      backgroundColor: "#24cf3b30",
      color: "#147120",
    },
    wrong: {
      backgroundColor: "#ee3a3a60",
      color: "#bf2828",
    },
    total: {
      backgroundColor: "#fff86c60",
      color: "#ada72a",
    },
    scoreCard: {
      display: "flex",
      flex: 1,
      height: "100%",
      border: "3px solid #00000020",
      borderRadius: "30px",
      position: "relative",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: typography.fonts.heading,
    },
    scoreText: {
      margin: "0",
      paddingTop: "20px",
      flex: 0.5,
    },
    circleIcon: {
      width: "40px",
      height: "40px",
      top: "0",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    number: {
      fontSize: typography.fontSizes.xxl,
      margin: 0,
      flex: 2.5,
      lineHeight: 1,
    },
  };
  let style = {};
  let scoreText = "";
  let cardIcon = "";
  let circleColor = "";
  let number: number | null = numberProps;

  if (scoreType === "right") {
    style = styles.right;
    scoreText = "Rätt";
    cardIcon = checkMark;
    circleColor = "#147120";
  } else if (scoreType === "wrong") {
    style = styles.wrong;
    scoreText = "Fel";
    cardIcon = wrongMark;
    circleColor = "#bf2828";
  } else if (scoreType === "total") {
    style = styles.total;
    scoreText = "Total";
    cardIcon = boxMark;
    circleColor = "#ada72a";
  }

  return (
    <div style={{ ...styles.scoreCard, ...style }}>
      <CircleIcon
        monsterIcon={cardIcon}
        monsterColor={circleColor}
        style={styles.circleIcon}
      />
      <h2 style={styles.scoreText}>{scoreText}</h2>
      <p style={styles.number}>{number}</p>
    </div>
  );
}
