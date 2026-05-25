import type { CSSProperties } from "react";
import { colors } from "../../styles/theme/colors";
import ModalHeader from "../ModalHeader";
import MonsterShowcase from "../MonsterShowcase";
import ScoreSection from "../ScoreSection";
import ResultMessage from "../ResultMessage";
import Button from "../ui/button";
import { spacing } from "../../styles/theme";

interface ResultsModalProps {
  correctAnswers: number | null;
  totalItems: number | null;
  wrongAnswers: number | null;
}

export default function ResultsModal({
  correctAnswers,
  totalItems,
  wrongAnswers,
}: ResultsModalProps) {
  const styles: {
    viewPortContainer: CSSProperties;
    modalContainer: CSSProperties;
    buttonStyle: CSSProperties;
  } = {
    viewPortContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      inset: "0",
      zIndex: "999",
      background: "#00000070",
    },
    modalContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "50%",
      height: "80%",
      opacity: 1,
      background: colors.secondaryButton,
      borderRadius: "30px",
      boxShadow:
        "0 0 0 1px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.6)",
      position: "relative",
      paddingBottom: "20px",
    },
    buttonStyle: {
      width: "30%",
      padding: spacing.md,
      position: "absolute",
      bottom: "0%",
      left: "50%",
      transform: "translate(-50%, 50%)",
    },
  };

  const buttonLabel = "Spela igen!";

  return (
    <div style={styles.viewPortContainer}>
      <div style={styles.modalContainer}>
        <ModalHeader />
        <MonsterShowcase />
        <ScoreSection
          correctAnswers={correctAnswers}
          totalItems={totalItems}
          wrongAnswers={wrongAnswers}
        />
        <ResultMessage />
        <Button label={buttonLabel} style={styles.buttonStyle} />
      </div>
    </div>
  );
}
