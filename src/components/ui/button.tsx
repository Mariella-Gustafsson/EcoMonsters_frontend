import { spacing } from "../../styles/theme";
import { colors } from "../../styles/theme/colors";
import { typography } from "../../styles/theme";
import type { CSSProperties } from "react";
import "../../styles/game-layout-styles.css";

interface ButtonProps {
  label: string;
  rounded?: boolean;
  style?: CSSProperties;
  handlePress?: () => void;
}

export default function Button({
  label,
  rounded,
  style,
  handlePress,
}: ButtonProps) {
  const styles = {
    buttonStyle: {
      background: colors.secondaryButton,
      color: colors.text,
      padding: spacing.lg,
      fontSize: typography.fontSizes.md,
      fontFamily: typography.fonts.text,
      fontWeight: typography.weights.semiBold,
      borderRadius: rounded ? "50%" : "999px",
      width: rounded ? "70px" : "auto",
      height: rounded ? "70px" : "auto",
      cursor: "pointer",
      border: "none",
      textShadow: "0 1px 1px rgba(0,0,0,0.2)",
      boxShadow: colors.shadow,
    },
    iconStyle: {
      color: colors.textTitle,
    },
  };

  return (
    <button
      style={{ ...styles.buttonStyle, ...style }}
      onClick={handlePress}
      className="button-hover"
    >
      {label}
    </button>
  );
}
