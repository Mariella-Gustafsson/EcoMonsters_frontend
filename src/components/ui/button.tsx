import { spacing } from "../../styles/theme";
import { colors } from "../../styles/theme/colors";
import { typography } from "../../styles/theme";

interface ButtonProps {
  label: string;
  rounded?: boolean;
}

export default function Button({ label, rounded }: ButtonProps) {
  const styles = {
    buttonStyle: {
      backgroundColor: colors.primary,
      color: colors.text,
      padding: spacing.lg,
      fontSize: typography.fontSizes.lg,
      fontFamily: typography.fonts.text,
      fontWeight: typography.weights.semiBold,
      borderRadius: rounded ? "50%" : "999px",
      width: rounded ? "70px" : "auto",
      height: rounded ? "70px" : "auto",
      cursor: "pointer",
      border: "none",
      background: colors.secondaryButton,
      textShadow: "0 1px 1px rgba(0,0,0,0.2)",
      boxShadow: colors.shadow,
    },
    iconStyle: {
      color: colors.textTitle,
    },
  };

  return <button style={styles.buttonStyle}>{label}</button>;
}
