import logo from "../../assets/images/EcoMonstersLogo.png";
import "../../styles/game-layout-styles.css";
import { spacing } from "../../styles/theme";
import Button from "../ui/button";

export default function Header() {
  return (
    <header className="game-header">
      <div style={{ padding: spacing.md }} className="logo-container">
        <img src={logo} alt="EcoMonsters Logo" className="game-logo" />
        <Button label="Monsters" />
      </div>
    </header>
  );
}
