import Monster from "../ui/monster";
import type { Monster as MonsterType } from "../../types/monster";

interface MonsterSectionProps {
  correctAnswer: boolean | null;
  dropId?: string | null;
  setCorrectAnswer?: React.Dispatch<React.SetStateAction<boolean | null>>;
  monsters: MonsterType[];
}

export default function MonsterSection({ monsters }: MonsterSectionProps) {
  const styles = {
    sectionContainer: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      gap: "20px",
      minHeight: "0",
    },
  };

  return (
    <div style={styles.sectionContainer}>
      {monsters.map((monster) => (
        <Monster
          key={monster.id}
          name={monster.name}
          image={monster.image}
          dropId={monster.materialType}
          monsterIcon={monster.monsterIcon}
          monsterColor={monster.monsterColor}
        />
      ))}
    </div>
  );
}
