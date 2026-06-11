import { spacing, typography, colors } from "../../styles/theme";
import type { Monster } from "../../types/monster";
import ModalHeader from "../ModalHeader";
import ModalWrapper from "./ModalWrapper";
import { useState } from "react";
import type { CSSProperties } from "react";
import Button from "../ui/button";

interface MonstersModalProps {
  monsters: Monster[];
  handleCloseButton: () => void;
}

export default function MonstersModal({
  monsters,
  handleCloseButton,
}: MonstersModalProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const styles: {
    container: CSSProperties;
    monsterCardContainer: CSSProperties;
    monsterName: CSSProperties;
    imageContainer: CSSProperties;
    monsterImage: CSSProperties;
    monsterDescription: CSSProperties;
    closeButton: CSSProperties;
    forwardButton: CSSProperties;
    backButton: CSSProperties;
  } = {
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      padding: spacing.md,
    },
    monsterCardContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
      backgroundColor: "#ad6e1070",
      borderRadius: "30px",
      padding: spacing.lg,
    },
    monsterName: {
      margin: 0,
      fontFamily: typography.fonts.heading,
      fontSize: typography.fontSizes.lg,
      color: "#845610",
    },
    imageContainer: { flex: 1, width: "100%" },
    monsterImage: {
      objectFit: "contain",
      height: "100%",
      width: "100%",
    },
    monsterDescription: {
      fontFamily: typography.fonts.text,
      fontSize: typography.fontSizes.md,
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: typography.weights.bold,
    },
    forwardButton: {
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translate(50%, -50%)",
      background: colors.primaryButton,
    },
    backButton: {
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translate(-50%, -50%)",
      background: colors.primaryButton,
    },
  };

  let monsterName = monsters?.[activeIndex]?.name;
  let headerText = `Möt ${monsterName}`;
  let monsterImage = monsters?.[activeIndex]?.image;
  let monsterDescription = monsters?.[activeIndex]?.description;

  const handleForwardButton = () => {
    setActiveIndex((prev) => (prev === monsters.length - 1 ? 0 : prev + 1));
  };

  const handleBackButton = () => {
    setActiveIndex((prev) => (prev === 0 ? monsters.length - 1 : prev - 1));
  };

  return (
    <ModalWrapper>
      <Button
        style={styles.closeButton}
        rounded={true}
        label="X"
        handlePress={handleCloseButton}
      />
      <Button
        style={styles.forwardButton}
        rounded={true}
        label=">"
        handlePress={handleForwardButton}
      />
      <Button
        style={styles.backButton}
        rounded={true}
        label="<"
        handlePress={handleBackButton}
      />
      <ModalHeader modalHeaderText={headerText} />
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src={monsterImage}
            alt={headerText}
            style={styles.monsterImage}
          />
        </div>
        <div style={styles.monsterCardContainer}>
          <h2 style={styles.monsterName}>{monsterName}</h2>
          <p style={styles.monsterDescription}>{monsterDescription}</p>
        </div>
      </div>
    </ModalWrapper>
  );
}
