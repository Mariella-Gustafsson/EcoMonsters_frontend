import type { CSSProperties } from "react";
import kompostinaHappy from "../assets/images/Kompostina-happy.png";
import plastellaHappy from "../assets/images/Plastella-happy.png";
import trophee from "../assets/images/trophee.png";

export default function MonsterShowcase() {
  const styles: {
    container: CSSProperties;
    imageContainer: CSSProperties;
    image: CSSProperties;
  } = {
    container: {
      display: "flex",
      flex: 1.25,
      minHeight: "0",
      width: "100%",
      padding: "0 50px",
    },
    imageContainer: { width: "30%", flex: "1", minWidth: "0" },
    image: { width: "100%", height: "100%", objectFit: "contain" },
  };
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={kompostinaHappy} style={styles.image} />
      </div>
      <div style={styles.imageContainer}>
        <img src={trophee} style={styles.image} />
      </div>
      <div style={styles.imageContainer}>
        <img src={plastellaHappy} style={styles.image} />
      </div>
    </div>
  );
}
