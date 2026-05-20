import { colors } from "../../styles/theme/colors";

interface ProgressCircleProps {
  progress: number;
  length?: number;
  activeIndex?: number;
}
export default function progressCircles({
  progress,
  length,
  activeIndex,
}: ProgressCircleProps) {
  const styles = {
    circleContainer: {
      display: "flex",
      gap: "5px",
      alignItems: "center",
      flex: 1,
    },
    circles: {
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      border: `3px solid ${colors.border}`,
    },
    circleActive: {
      backgroundColor: colors.primary,
      width: "20px",
      height: "20px",
    },
    circleProgress: {
      backgroundColor: colors.secondary,
    },
    circleLeft: {
      backgroundColor: "#ffffff",
    },
  };

  return (
    <div style={styles.circleContainer}>
      {[...Array(length || 0)].map((_, index) => (
        <div
          key={index}
          style={{
            ...styles.circles,
            ...(index === activeIndex
              ? styles.circleActive
              : index < progress
                ? styles.circleProgress
                : styles.circleLeft),
          }}
        />
      ))}
    </div>
  );
}
