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
    borderRadius: "100px",
    cursor: "pointer",
    border: "none",
  },
  iconStyle: {
    color: colors.textTitle,
  },
};

export default function Button({ label }: ButtonProps) {
  return <button style={styles.buttonStyle}>{label}</button>;
}
