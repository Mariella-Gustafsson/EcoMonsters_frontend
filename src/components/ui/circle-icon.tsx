import type { CSSProperties } from "react";

interface CircleIconProps {
  monsterIcon?: string;
  monsterColor?: string;
  style?: CSSProperties;
}
export default function CircleIcon({
  monsterIcon,
  monsterColor,
  style,
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
    <div style={{ ...styles.container, ...style }}>
      <img src={monsterIcon} alt="Monster Icon" />
    </div>
  );
}
