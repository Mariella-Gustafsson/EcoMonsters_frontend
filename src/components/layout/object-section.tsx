import Object from "../ui/object";
import type { CSSProperties } from "react";

export default function ObjectSection() {
  const styles: {
    sectionContainer: CSSProperties;
    objectContainer: CSSProperties;
  } = {
    objectContainer: {
      width: "20%",
      borderRadius: "20px",
    },
    sectionContainer: {
      display: "flex",
      flex: 1,
      height: "100%",
      justifyContent: "center",
      gap: "50px",
    },
  };

  return (
    <div style={styles.sectionContainer}>
      <div style={styles.objectContainer} className="object-section">
        <Object />
      </div>
    </div>
  );
}
