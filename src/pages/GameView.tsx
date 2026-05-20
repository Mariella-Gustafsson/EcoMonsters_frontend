import { useState, useRef } from "react";
import Header from "../components/layout/header";
import MonsterSection from "../components/layout/monster-section";
import ObjectSection from "../components/layout/object-section";
import { DndContext } from "@dnd-kit/core";
import { useEffect } from "react";
import type { Item, ItemsAPI } from "../types/item";
import type { MonsterAPI } from "../types/monster";
import type { Monster as MonsterType } from "../types/monster";

function GameView() {
  const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);
  const [dropId, setDropId] = useState<string | null>(null);
  const [randomItem, setRandomItem] = useState<Item | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [monsters, setMonsters] = useState<MonsterType[]>([]);
  const [isLoadingMonsters, setIsLoadingMonsters] = useState(true);
  const [isLoadingItems, setIsLoadingItems] = useState(true);
  const [isOverDropZone, setIsOverDropZone] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sortedCount = items.filter((i) => i.status === "sorted").length;

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
            imageEating: `http://localhost:5000${monster.monster_eating_image_url}`,
            materialType: monster.material_type,
            monsterIcon: `http://localhost:5000${monster.monster_icon}`,
            monsterColor: monster.monster_color,
          })),
        );
        setIsLoadingMonsters(false);
      });

    fetch("http://localhost:5000/api/items")
      .then((response) => response.json())
      .then((data) => {
        setItems(
          data.map((item: ItemsAPI) => ({
            id: item.id,
            name: item.name,
            image: `http://localhost:5000${item.image_url}`,
            materialType: item.correct_material,
            status: "unsorted",
          })),
        );
        setIsLoadingItems(false);
      });
  }, []);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) {
      setDropId(null);
      setIsOverDropZone(false);
      resetMonsterImages();
      return;
    }
    if (active.data.current.materialType === over.id) {
      setDropId(over.id);
      setCorrectAnswer(true);
      setItems((prev) =>
        prev.map((item) =>
          item.id === active.id ? { ...item, status: "sorted" } : item,
        ),
      );
    } else {
      setDropId(over.id);
      setCorrectAnswer(false);
    }
  };

  function returnToNeutralImage(dropId: string | null, willDelay = false) {
    const updateMonsterImage = monsters.map((monster) => {
      if (monster.materialType === dropId) {
        return { ...monster, image: monster.imageNeutral };
      }
      return monster;
    });

    if (willDelay) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setMonsters(updateMonsterImage);
      }, 1000);
    } else {
      setMonsters(updateMonsterImage);
    }
  }

  function resetMonsterImages() {
    setMonsters((prev) => {
      const updated = prev.map((monster) => ({
        ...monster,
        image: monster.imageNeutral,
      }));
      return updated;
    });
  }

  useEffect(() => {
    if (dropId === null && isOverDropZone === false) {
      resetMonsterImages();
    }
  }, [dropId, isOverDropZone]);

  const handleDragOver = (event: any) => {
    const { over } = event;
    if (!over) {
      setIsOverDropZone(false);
      setDropId(null);
      resetMonsterImages();
      return;
    }

    const overId = over.id as string;
    setIsOverDropZone(true);
    setDropId(overId);
    setMonsters((prev) =>
      prev.map((monster) => ({
        ...monster,
        image:
          monster.materialType === overId
            ? monster.imageEating
            : monster.imageNeutral,
      })),
    );
  };

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
      dropId ? returnToNeutralImage(dropId, true) : null;
      setActiveIndex((prev) => prev + 1);
    } else if (correctAnswer === false) {
      const updateMonsterImage = monsters.map((monster) => {
        if (monster.materialType === dropId) {
          return { ...monster, image: monster.imageSad };
        }
        return monster;
      });
      setMonsters(updateMonsterImage);
      setCorrectAnswer && setCorrectAnswer(null);
      dropId ? returnToNeutralImage(dropId, true) : null;
    }
  }, [correctAnswer, dropId]);

  useEffect(() => {
    const sortedItems = items.filter((item) => item.status === "unsorted");

    const randomItem =
      sortedItems[Math.floor(Math.random() * sortedItems.length)];
    setRandomItem(randomItem);
  }, [items]);

  return (
    <DndContext onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
      <Header
        progress={sortedCount}
        length={items.length}
        activeIndex={activeIndex}
      />
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
      {isLoadingItems ? (
        <p>Loading...</p>
      ) : (
        <ObjectSection randomItem={randomItem} isLoading={isLoadingItems} />
      )}
    </DndContext>
  );
}

export default GameView;
