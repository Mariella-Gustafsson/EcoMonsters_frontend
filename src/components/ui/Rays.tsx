import type { CSSProperties } from "react";

export default function Rays() {
  const styles: { rays: CSSProperties } = {
    rays: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      background:
        "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.18) 0deg 10deg, transparent 10deg 20deg)",
      filter: "blur(2px)",
      opacity: 0.6,
      zIndex: 0,
    },
  };

  return <div style={styles.rays} />;
}
