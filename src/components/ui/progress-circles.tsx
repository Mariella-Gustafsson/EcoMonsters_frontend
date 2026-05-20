interface ProgressCircleProps {
  progress: number;
  length?: number;
}

export default function progressCircles({
  progress,
  length,
}: ProgressCircleProps) {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {[...Array(length || 5)].map((_, index) => (
        <div
          key={index}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: index < progress ? "#4CAF50" : "#ccc",
          }}
        />
      ))}
    </div>
  );
}
