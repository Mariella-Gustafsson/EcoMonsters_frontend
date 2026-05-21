import type { CSSProperties } from "react";
import ScoreCard from "./ui/ScoreCard";

export default function ScoreSection() {
  const styles: { container: CSSProperties } = {
    container: {
      display: "flex",
      flex: 1,
      width: "100%",
      gap: "20px",
      padding: "0 50px",
    },
  };
  return (
    <div style={styles.container}>
      <ScoreCard scoreType="right" />
      <ScoreCard scoreType="total" />
      <ScoreCard scoreType="wrong" />
    </div>
  );
}
