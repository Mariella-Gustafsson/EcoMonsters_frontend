import type { CSSProperties } from "react";
import { colors, typography } from "../../styles/theme";
import CircleIcon from "./circle-icon";
import { useDroppable } from "@dnd-kit/core";

interface MonsterProps {
  id?: string;
  name?: string;
  image?: string;
  dropId?: string;
  monsterIcon?: string;
  monsterColor?: string;
}

export default function Monster({
  id,
  name,
  image,
  dropId,
  monsterIcon,
  monsterColor,
}: MonsterProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `${dropId}`,
  });
  const styles: {
    sectionStyle: CSSProperties;
    monsterImage: CSSProperties;
    monsterName: CSSProperties;
    imageContainer: CSSProperties;
  } = {
    sectionStyle: {
      position: "relative",
      backgroundColor: isOver ? "white" : "#f1ddc460",
      width: "15%",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "0",
      height: "100%",
    },
    monsterImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
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
    imageContainer: {
      aspectRatio: "1 / 1",
      width: "100%",
      height: "100%",
    },
  };

  return (
    <div style={styles.sectionStyle} ref={setNodeRef}>
      <CircleIcon monsterIcon={monsterIcon} monsterColor={monsterColor} />
      <div style={styles.imageContainer}>
        <img id={id} style={styles.monsterImage} src={image} alt={name} />
      </div>
      <h3 style={styles.monsterName}>{name}</h3>
    </div>
  );
}
