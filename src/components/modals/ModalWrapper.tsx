import type { CSSProperties } from "react";
import { colors } from "../../styles/theme/colors";

interface ModalWrapperProps {
  children: React.ReactNode;
}

export default function ModalWrapper({ children }: ModalWrapperProps) {
  const styles: {
    viewPortContainer: CSSProperties;
    modalContainer: CSSProperties;
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
  };

  return (
    <div style={styles.viewPortContainer}>
      <div style={styles.modalContainer}>{children}</div>
    </div>
  );
}
