import type { CSSProperties } from "react";
import { typography, colors } from "../styles/theme";

export default function ResultMessage() {
  const styles: {
    container: CSSProperties;
    messageHeader: CSSProperties;
    message: CSSProperties;
  } = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 0.75,
      background: "#79bb15",
      margin: "0 60px",
      borderRadius: "30px",
      backgroundColor: "#24cf3b30",
      border: "3px solid #00000020",
      gap: "10px",
      paddingTop: "10px",
    },
    messageHeader: {
      margin: 0,
      fontFamily: typography.fonts.text,
      fontWeight: typography.weights.bold,
    },
    message: {
      margin: 0,
      fontFamily: typography.fonts.text,
      fontSize: typography.fontSizes.md,
      color: colors.text,
    },
  };

  const resultMessageHeader = "Du gjorde ett fantastiskt jobb!";
  const resultMessage = "Fortsätt så - du gör skillnad för planeten!";

  return (
    <div style={styles.container}>
      <h2 style={styles.messageHeader}>{resultMessageHeader}</h2>
      <p style={styles.message}>{resultMessage}</p>
    </div>
  );
}
