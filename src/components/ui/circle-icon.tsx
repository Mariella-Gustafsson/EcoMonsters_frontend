import type { CSSProperties } from "react";
import AppleIcon from "../../assets/icons/apple-core.svg";

const styles: { container: CSSProperties } = {
  container: {
    position: "absolute",
    right: "5px",
    top: "5px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#331e05",
    padding: "10px",
  },
};

export default function CircleIcon() {
  return (
    <div style={styles.container}>
      <img src={AppleIcon} alt="Apple" />
    </div>
  );
}
