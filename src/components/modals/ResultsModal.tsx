import type { CSSProperties } from "react";
import ModalHeader from "../ModalHeader";
import MonsterShowcase from "../MonsterShowcase";
import ScoreSection from "../ScoreSection";
import ResultMessage from "../ResultMessage";
import Button from "../ui/button";
import { spacing } from "../../styles/theme";
import ModalWrapper from "./ModalWrapper";

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
    buttonStyle: CSSProperties;
  } = {
    buttonStyle: {
      width: "30%",
      padding: spacing.md,
      position: "absolute",
      bottom: "0%",
      left: "50%",
      transform: "translate(-50%, 50%)",
    },
  };
  const modaleHeaderText = "Bra jobbat!";
  const buttonLabel = "Spela igen!";

  return (
    <ModalWrapper>
      <ModalHeader modalHeaderText={modaleHeaderText} />
      <MonsterShowcase />
      <ScoreSection
        correctAnswers={correctAnswers}
        totalItems={totalItems}
        wrongAnswers={wrongAnswers}
      />
      <ResultMessage />
      <Button label={buttonLabel} style={styles.buttonStyle} />
    </ModalWrapper>
  );
}
