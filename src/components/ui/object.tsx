import type { CSSProperties } from "react";

export default function Object() {
  const styles: { objectImage: CSSProperties } = {
    objectImage: {
      width: "100%",
      height: "auto",
      filter:
        "drop-shadow(0 0 1px #ffe053) drop-shadow(0 0 5px #faf3d3) drop-shadow(0 0 10px #faf3d3) drop-shadow(0 0 20px #faf3d3)",
    },
  };
  return (
    <div>
      <img
        style={styles.objectImage}
        src="/images/egg-carton.png"
        alt="Egg Carton"
      />
    </div>
  );
}
