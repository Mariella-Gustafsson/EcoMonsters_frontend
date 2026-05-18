import logo from "../../assets/images/EcoMonstersLogo.png";
import "../../styles/game-layout-styles.css";
import Button from "../ui/button";

export default function Header() {
  return (
    <header className="game-header">
      <div className="logo-container">
        <Button label="?" />
        <img src={logo} alt="EcoMonsters Logo" className="game-logo" />
        <Button label="Monsters" />
      </div>
    </header>
  );
}
