import Monster from "../ui/monster";

export default function MonsterSection() {
  const styles = {
    sectionContainer: {
      display: "flex",
      flex: 0.5,
      justifyContent: "center",
      gap: "70px",
    },
  };

  return (
    <div style={styles.sectionContainer}>
      <Monster
        name="Kompostina"
        image="http://localhost:3000/images/Kompostina-neutral.png"
      />
      <Monster
        name="Plastella"
        image="http://localhost:3000/images/Kompostina-neutral.png"
      />
      <Monster
        name="Cartonix"
        image="http://localhost:3000/images/Kompostina-neutral.png"
      />
      <Monster
        name="Glasmo"
        image="http://localhost:3000/images/Kompostina-neutral.png"
      />
    </div>
  );
}
