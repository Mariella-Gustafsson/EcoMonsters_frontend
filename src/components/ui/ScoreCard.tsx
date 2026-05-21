import type { CSSProperties } from "react";

interface ScoreCardProps {
  scoreType: "right" | "wrong" | "total";
}

export default function ScoreCard({ scoreType }: ScoreCardProps) {
  const styles: {
    right: CSSProperties;
    total: CSSProperties;
    wrong: CSSProperties;
  } = {
    right: { flex: 1, height: "100%", background: "#000000" },
    total: { flex: 1, height: "100%", background: "#841c1c" },
    wrong: { flex: 1, height: "100%", background: "#30a08a" },
  };
  let style = {};

  if (scoreType === "right") style = styles.right;
  else if (scoreType === "wrong") style = styles.wrong;
  else if (scoreType === "total") style = styles.total;
  return <div style={style}></div>;
}
