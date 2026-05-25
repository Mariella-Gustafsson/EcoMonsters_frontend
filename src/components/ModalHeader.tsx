import type { CSSProperties } from "react";
import leaveImage from "../assets/images/leave-decoration.png";
import leaveImageMirrored from "../assets/images/leave-decoration-mirrored.png";
import { colors } from "../styles/theme/colors";
import { typography } from "../styles/theme";

interface ModalHeaderProps {
  modalHeaderText: string;
}

export default function ModalHeader({ modalHeaderText }: ModalHeaderProps) {
  const styles: {
    title: CSSProperties;
    container: CSSProperties;
    imageContainer: CSSProperties;
  } = {
    container: {
      width: "100%",
      height: "100px",
      display: "flex",
      justifyContent: "center",
    },
    title: {
      margin: "0",
      fontFamily: typography.fonts.heading,
      color: colors.text,
      fontSize: typography.fontSizes.xxl,
    },
    imageContainer: { padding: "20px", height: "100%" },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={leaveImage} alt="decorative" />
      </div>
      <h2 style={styles.title}>{modalHeaderText}</h2>
      <div style={styles.imageContainer}>
        <img src={leaveImageMirrored} alt="decorative" />
      </div>
    </div>
  );
}
