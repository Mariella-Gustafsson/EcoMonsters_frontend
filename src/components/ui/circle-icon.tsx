import type { CSSProperties } from "react";

interface CircleIconProps {
  monsterIcon?: string;
  monsterColor?: string;
}
export default function CircleIcon({
  monsterIcon,
  monsterColor,
}: CircleIconProps) {
  const styles: { container: CSSProperties } = {
    container: {
      position: "absolute",
      right: "5px",
      top: "5px",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: monsterColor || "#22590a",
      padding: "10px",
    },
  };
  return (
    <div style={styles.container}>
      <img src={monsterIcon} alt="Monster Icon" />
    </div>
  );
}
