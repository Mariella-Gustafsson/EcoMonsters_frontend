import { useState } from "react";
import Header from "../components/layout/header";
import MonsterSection from "../components/layout/monster-section";
import ObjectSection from "../components/layout/object-section";
import { DndContext } from "@dnd-kit/core";
import { useEffect } from "react";
import type { Item } from "../types/item";

function GameView() {
  const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);
  const [dropId, setDropId] = useState<string | null>(null);
  const [randomItem, setRandomItem] = useState<Item | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([
    {
      name: "Egg carton",
      image: "/images/egg-carton.png",
      category: "carton",
    },
    {
      name: "Glass bottle",
      image: "/images/raspberry-juice-bottle.png",
      category: "glass",
    },
    {
      name: "Plastic bottle",
      image: "/images/water-bottle.png",
      category: "plastic",
    },
  ]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;
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

  useEffect(() => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setRandomItem(randomItem);
    setIsLoading(false);
  }, [items]);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Header />
      <MonsterSection
        correctAnswer={correctAnswer}
        dropId={dropId}
        setCorrectAnswer={setCorrectAnswer}
      />
      <ObjectSection randomItem={randomItem} isLoading={isLoading} />
    </DndContext>
  );
}

export default GameView;
