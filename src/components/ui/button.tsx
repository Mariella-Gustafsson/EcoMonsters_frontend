import { spacing } from "../../styles/theme";
import { colors } from "../../styles/theme/colors";
import { typography } from "../../styles/theme";

interface ButtonProps {
  label: string;
}

const styles = {
  buttonStyle: {
    backgroundColor: colors.primary,
    color: colors.textTitle,
    padding: spacing.lg,
    fontSize: typography.fontSizes.lg,
    fontFamily: typography.fonts.text,
    borderRadius: "999px",
    boxShadow:
      "0 6px 12px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.25)",
    cursor: "pointer",
    border: "none",
    background: `linear-gradient(to bottom, #f8ea9d 0%, ${colors.primary} 100%)`,
    textShadow: "0 1px 1px rgba(0,0,0,0.2)",
    //background: `radial-gradient(ellipse, ${colors.primary} 40%, #f8ea9d 100%)`,
  },
  iconStyle: {
    color: colors.textTitle,
  },
};

export default function Button({ label }: ButtonProps) {
  return <button style={styles.buttonStyle}>{label}</button>;
}
