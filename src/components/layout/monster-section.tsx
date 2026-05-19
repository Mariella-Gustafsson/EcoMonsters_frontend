import { useEffect, useState } from "react";
import Monster from "../ui/monster";
import type { Monster as MonsterType } from "../../types/monster";
import type { MonsterAPI } from "../../types/monster";

interface MonsterSectionProps {
  correctAnswer: boolean | null;
  dropId?: string | null;
  setCorrectAnswer?: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export default function MonsterSection({
  correctAnswer,
  dropId,
  setCorrectAnswer,
}: MonsterSectionProps) {
  const [monsters, setMonsters] = useState<MonsterType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/monsters")
      .then((response) => response.json())
      .then((data) => {
        setMonsters(
          data.map((monster: MonsterAPI) => ({
            id: monster.id,
            description: monster.description,
            name: monster.name,
            image: `http://localhost:5000${monster.monster_neutral_image_url}`,
            imageNeutral: `http://localhost:5000${monster.monster_neutral_image_url}`,
            imageHappy: `http://localhost:5000${monster.monster_happy_image_url}`,
            imageSad: `http://localhost:5000${monster.monster_sad_image_url}`,
            materialType: monster.material_type,
            monsterIcon: `http://localhost:5000${monster.monster_icon}`,
            monsterColor: monster.monster_color,
          })),
        );
      });
  }, []);

  const styles = {
    sectionContainer: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      gap: "20px",
      minHeight: "0",
    },
  };

  function returnToNeutralImage(dropId: string | null) {
    setTimeout(() => {
      const updateMonsterImage = monsters.map((monster) => {
        if (monster.materialType === dropId) {
          return { ...monster, image: monster.imageNeutral };
        }
        return monster;
      });
      setMonsters(updateMonsterImage);
    }, 2000);
  }

  useEffect(() => {
    if (correctAnswer === true) {
      const updateMonsterImage = monsters.map((monster) => {
        if (monster.materialType === dropId) {
          return { ...monster, image: monster.imageHappy };
        }
        return monster;
      });
      setMonsters(updateMonsterImage);
      setCorrectAnswer && setCorrectAnswer(null);
      dropId ? returnToNeutralImage(dropId) : null;
    } else if (correctAnswer === false) {
      const updateMonsterImage = monsters.map((monster) => {
        if (monster.materialType === dropId) {
          return { ...monster, image: monster.imageSad };
        }
        return monster;
      });
      setMonsters(updateMonsterImage);
      setCorrectAnswer && setCorrectAnswer(null);
      dropId ? returnToNeutralImage(dropId) : null;
    }
  }, [correctAnswer, dropId]);

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
