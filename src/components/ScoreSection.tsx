import type { CSSProperties } from "react";
import ScoreCard from "./ui/ScoreCard";

export default function ScoreSection() {
  const styles: { container: CSSProperties } = {
    container: {
      display: "flex",
      flex: 1,
      width: "100%",
      gap: "10px",
      padding: "10px 50px",
      height: "100%",
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
