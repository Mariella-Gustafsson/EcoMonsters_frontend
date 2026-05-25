import type { CSSProperties } from "react";
import ScoreCard from "./ui/ScoreCard";

interface ScoreSectionProps {
  correctAnswers: number | null;
  totalItems: number | null;
  wrongAnswers: number | null;
}

export default function ScoreSection({
  correctAnswers,
  totalItems,
  wrongAnswers,
}: ScoreSectionProps) {
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
      <ScoreCard scoreType="right" numberProps={correctAnswers} />
      <ScoreCard scoreType="total" numberProps={totalItems} />
      <ScoreCard scoreType="wrong" numberProps={wrongAnswers} />
    </div>
  );
}
