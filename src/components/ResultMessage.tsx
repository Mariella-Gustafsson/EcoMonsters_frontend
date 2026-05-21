import type { CSSProperties } from "react";

export default function ResultMessage() {
  const styles: { container: CSSProperties; resultMessage: CSSProperties } = {
    container: {
      flex: 0.75,
      background: "#79bb15",
      margin: "0 60px",
      borderRadius: "30px",
    },
    resultMessage: { height: "100%" },
  };
  return (
    <div style={styles.container}>
      <div style={styles.resultMessage}></div>
    </div>
  );
}
