import type { CSSProperties } from "react";
import { colors, typography } from "../../styles/theme";
import CircleIcon from "./circle-icon";

interface MonsterProps {
  name?: string;
  image?: string;
}

export default function Monster({ name, image }: MonsterProps) {
  const styles: {
    sectionStyle: CSSProperties;
    monsterImage: CSSProperties;
    monsterName: CSSProperties;
  } = {
    sectionStyle: {
      position: "relative",
      backgroundColor: "#f1ddc460",
      width: "15%",
      borderRadius: "20px",
    },
    monsterImage: {
      width: "100%",
      height: "auto",
      padding: "30px",
      paddingBottom: "0px",
      opacity: 1,
      filter: `drop-shadow(${colors.shadow})`,
    },
    monsterName: {
      margin: "0px",
      textAlign: "center",
      fontFamily: typography.fonts.heading,
      fontSize: typography.fontSizes.xxl,
      color: colors.text,
      padding: "10px 0",
    },
  };

  return (
    <div style={styles.sectionStyle}>
      <CircleIcon />
      <img style={styles.monsterImage} src={image} alt={name} />
      <h3 style={styles.monsterName}>{name}</h3>
    </div>
  );
}
