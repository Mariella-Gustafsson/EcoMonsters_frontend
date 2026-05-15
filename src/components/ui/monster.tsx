import type { CSSProperties } from "react";
import { colors, typography } from "../../styles/theme";

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
      backgroundColor: "#f1ddc460",
      width: "15%",
      borderRadius: "20px",
    },
    monsterImage: {
      width: "100%",
      height: "auto",
      opacity: 1,
    },
    monsterName: {
      margin: "0px",
      textAlign: "center",
      fontFamily: typography.fonts.heading,
      fontSize: typography.fontSizes.xxl,
      color: colors.text,
    },
  };

  return (
    <div style={styles.sectionStyle}>
      <img style={styles.monsterImage} src={image} alt={name} />
      <h3 style={styles.monsterName}>{name}</h3>
    </div>
  );
}
