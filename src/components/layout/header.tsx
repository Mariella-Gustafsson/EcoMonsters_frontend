import logo from "../../assets/images/EcoMonstersLogo.png";
import "../../styles/game-layout-styles.css";
import Button from "../ui/button";
import ProgressCircles from "../ui/progress-circles";

export default function Header() {
  return (
    <header className="game-header">
      <div className="logo-container">
        <Button label="?" rounded={true} />
        <img src={logo} alt="EcoMonsters Logo" className="game-logo" />
        <Button label="Monsters" />
      </div>
      <ProgressCircles progress={5} />
    </header>
  );
}
