import { useState } from "react";
import Header from "../components/layout/header";
import MonsterSection from "../components/layout/monster-section";
import ObjectSection from "../components/layout/object-section";
import { DndContext } from "@dnd-kit/core";
import { useEffect } from "react";
import type { Item } from "../types/item";
import type { MonsterAPI } from "../types/monster";
import type { Monster as MonsterType } from "../types/monster";

function GameView() {
  const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);
  const [dropId, setDropId] = useState<string | null>(null);
  const [randomItem, setRandomItem] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([
    {
      name: "Egg carton",
      image: "/images/egg-carton.png",
      category: "kartong",
    },
    {
      name: "Glass bottle",
      image: "/images/raspberry-juice-bottle.png",
      category: "glas",
    },
    {
      name: "Plastic bottle",
      image: "/images/water-bottle.png",
      category: "plast",
    },
  ]);
  const [monsters, setMonsters] = useState<MonsterType[]>([]);
  const [isLoadingMonsters, setIsLoadingMonsters] = useState(true);

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
        setIsLoadingMonsters(false);
      });
  }, []);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    console.log("Active ID:", active.id);
    console.log("Over ID:", over.id);
    if (active.id === over.id) {
      setDropId(over.id);
      setCorrectAnswer(true);
      const updateItems = items.filter((item) => item.category !== over.id);
      setItems(updateItems);
    } else {
      setDropId(over.id);
      setCorrectAnswer(false);
    }
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

  console.log("correct answer ä", correctAnswer);

  useEffect(() => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setRandomItem(randomItem);
    setIsLoading(false);
  }, [items]);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Header />
      {isLoadingMonsters ? (
        <p>Loading...</p>
      ) : (
        <MonsterSection
          monsters={monsters}
          correctAnswer={correctAnswer}
          dropId={dropId}
          setCorrectAnswer={setCorrectAnswer}
        />
      )}
      <ObjectSection randomItem={randomItem} isLoading={isLoading} />
    </DndContext>
  );
}

export default GameView;
