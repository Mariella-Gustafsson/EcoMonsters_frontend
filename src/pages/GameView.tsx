import { useState, useRef } from "react";
import Header from "../components/layout/header";
import MonsterSection from "../components/layout/monster-section";
import ObjectSection from "../components/layout/object-section";
import { DndContext } from "@dnd-kit/core";
import { useEffect } from "react";
import type { Item } from "../types/item";
import type { Monster as MonsterType } from "../types/monster";
import ResultsModal from "../components/modals/ResultsModal";
import MonstersModal from "../components/modals/MonstersModal";
import { fetchItems, fetchMonsters } from "../services/api";
import { useDragAndDrop } from "../hooks/useDragAndDrop";
import { useGameLogic } from "../hooks/useGameLogic";

function GameView() {
  const [randomItem, setRandomItem] = useState<Item | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [monsters, setMonsters] = useState<MonsterType[]>([]);
  const [isLoadingMonsters, setIsLoadingMonsters] = useState(true);
  const [isLoadingItems, setIsLoadingItems] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sortedCount = items.filter(
    (i) => i.status === "correct" || "incorrect",
  ).length;
  const [showMonsterInfo, setShowMonsterInfo] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const {
    handleDragOver,
    handleDragEnd,
    dropId,
    activeItem,
    activeItemId,
    isOverDropZone,
    itemDropped,
    reset,
  } = useDragAndDrop();

  const {
    validateAnswer,
    isSortingComplete,
    getScore,
    score,
    correctAnswer,
    resetAnswer,
  } = useGameLogic();

  useEffect(() => {
    fetchMonsters().then((data) => {
      setMonsters(data);
      setIsLoadingMonsters(false);
    });

    fetchItems().then((data) => {
      setItems(data);
      setIsLoadingItems(false);
    });
  }, []);

  useEffect(() => {
    if (!itemDropped) return;

    let updatedItems: Item[];

    const isCorrect = validateAnswer(activeItem, dropId);

    if (isCorrect) {
      updatedItems = items.map((item) =>
        item.id === activeItemId ? { ...item, status: "correct" } : item,
      );
      reset();
    } else {
      updatedItems = items.map((item) =>
        item.id === activeItemId ? { ...item, status: "incorrect" } : item,
      );
      reset();
    }

    setItems(updatedItems);
    const sortingCompleted = isSortingComplete(updatedItems);
    if (!sortingCompleted) return;

    getScore(updatedItems);
    setShowResults(true);
  }, [itemDropped, activeItem, dropId, activeItemId, items, reset]);

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

  const handleInfoPress = () => {
    setShowMonsterInfo(true);
  };

  const handleCloseButton = () => {
    setShowMonsterInfo(false);
  };

  useEffect(() => {
    if (!isOverDropZone) {
      resetMonsterImages();
      return;
    }

    setMonsters((prev) =>
      prev.map((monster) => ({
        ...monster,
        image:
          monster.materialType === dropId
            ? monster.imageEating
            : monster.imageNeutral,
      })),
    );
  }, [dropId, isOverDropZone]);

  useEffect(() => {
    if (correctAnswer === true) {
      const updateMonsterImage = monsters.map((monster) => {
        if (monster.materialType === dropId) {
          return { ...monster, image: monster.imageHappy };
        }
        return monster;
      });
      setMonsters(updateMonsterImage);
      resetAnswer && resetAnswer();
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
      resetAnswer && resetAnswer();
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
        primaryAction={handleInfoPress}
      />
      {isLoadingMonsters ? (
        <p>Loading...</p>
      ) : (
        <MonsterSection monsters={monsters} />
      )}
      {isLoadingItems ? (
        <p>Loading...</p>
      ) : (
        <ObjectSection randomItem={randomItem} isLoading={isLoadingItems} />
      )}
      {showResults && score && (
        <ResultsModal
          correctAnswers={score.correctCount}
          totalItems={items.length}
          wrongAnswers={score.wrongCount}
        />
      )}
      {showMonsterInfo && monsters && (
        <MonstersModal
          monsters={monsters}
          handleCloseButton={handleCloseButton}
        />
      )}
    </DndContext>
  );
}

export default GameView;
