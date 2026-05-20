import logo from "../../assets/images/EcoMonstersLogo.png";
import "../../styles/game-layout-styles.css";
import Button from "../ui/button";
import ProgressCircles from "../ui/progress-circles";
import type { CSSProperties } from "react";

interface HeaderProps {
  progress: number;
  length: number;
  activeIndex: number;
}

export default function Header({ progress, length, activeIndex }: HeaderProps) {
  const styles: { container: CSSProperties; imageContainer: CSSProperties } = {
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: 0,
    },
    imageContainer: {
      flex: 2,
      minHeight: 0,
    },
  };

  return (
    <header className="game-header">
      <div className="logo-container">
        <Button label="?" rounded={true} />
        <div style={styles.container}>
          <div style={styles.imageContainer}>
            <img src={logo} alt="EcoMonsters Logo" className="game-logo" />
          </div>
          <ProgressCircles
            progress={progress}
            length={length}
            activeIndex={activeIndex}
          />
        </div>
        <Button label="Monsters" />
      </div>
    </header>
  );
}
