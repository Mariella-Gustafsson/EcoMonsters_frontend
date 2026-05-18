import Monster from "../ui/monster";

export default function MonsterSection() {
  const styles = {
    sectionContainer: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      gap: "20px",
    },
  };
  return (
    <div style={styles.sectionContainer}>
      <Monster
        name="Kompostina"
        image="http://localhost:3000/images/Kompostina-neutral.png"
        dropId="organic"
      />
      <Monster
        name="Plastella"
        image="http://localhost:3000/images/Kompostina-neutral.png"
        dropId="plastic"
      />
      <Monster
        name="Cartonix"
        image="http://localhost:3000/images/Kompostina-neutral.png"
        dropId="carton"
      />
      <Monster
        name="Glasmo"
        image="http://localhost:3000/images/Kompostina-neutral.png"
        dropId="glass"
      />
    </div>
  );
}
