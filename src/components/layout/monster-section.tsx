import { useEffect, useState } from "react";
import Monster from "../ui/monster";

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
  const [monsters, setMonsters] = useState([
    {
      name: "Kompostina",
      image: "http://localhost:3000/images/Kompostina-neutral.png",
      imageNeutral: "http://localhost:3000/images/Kompostina-neutral.png",
      imageHappy: "http://localhost:3000/images/Kompostina-happy.png",
      imageSad: "http://localhost:3000/images/Kompostina-sad.png",
      dropId: "organic",
    },
    {
      name: "Plastella",
      image: "http://localhost:3000/images/Kompostina-neutral.png",
      imageNeutral: "http://localhost:3000/images/Kompostina-neutral.png",
      imageHappy: "http://localhost:3000/images/Kompostina-happy.png",
      imageSad: "http://localhost:3000/images/Kompostina-sad.png",
      dropId: "plastic",
    },
    {
      name: "Cartonix",
      image: "http://localhost:3000/images/Kompostina-neutral.png",
      imageNeutral: "http://localhost:3000/images/Kompostina-neutral.png",
      imageHappy: "http://localhost:3000/images/Kompostina-happy.png",
      imageSad: "http://localhost:3000/images/Kompostina-sad.png",
      dropId: "carton",
    },
    {
      name: "Glasmo",
      image: "http://localhost:3000/images/Kompostina-neutral.png",
      imageNeutral: "http://localhost:3000/images/Kompostina-neutral.png",
      imageHappy: "http://localhost:3000/images/Kompostina-happy.png",
      imageSad: "http://localhost:3000/images/Kompostina-sad.png",
      dropId: "glass",
    },
  ]);

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
        if (monster.dropId === dropId) {
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
        if (monster.dropId === dropId) {
          return { ...monster, image: monster.imageHappy };
        }
        return monster;
      });
      setMonsters(updateMonsterImage);
      setCorrectAnswer && setCorrectAnswer(null);
      dropId ? returnToNeutralImage(dropId) : null;
    } else if (correctAnswer === false) {
      const updateMonsterImage = monsters.map((monster) => {
        if (monster.dropId === dropId) {
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
          key={monster.dropId}
          name={monster.name}
          image={monster.image}
          dropId={monster.dropId}
        />
      ))}
    </div>
  );
}
