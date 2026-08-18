import { useState } from "react";
import type { Score } from "../types/score";
import type { Item } from "../types/item";

export function useGameLogic() {
  const [score, setScore] = useState<Score | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);

  const resetAnswer = () => {
    setCorrectAnswer(null);
  };

  function isSortingComplete(items: Item[]) {
    const areAllItemsSorted = items.every((item) => item.status !== "unsorted");

    return areAllItemsSorted;
  }

  function getScore(items: Item[]) {
    const correctCount = items.filter((i) => i.status === "correct").length;
    const wrongCount = items.filter((i) => i.status === "incorrect").length;
    setScore({ correctCount, wrongCount });
  }

  function validateAnswer(activeItem: string | null, dropId: string | null) {
    const isCorrect = activeItem === dropId;

    setCorrectAnswer(isCorrect);

    return isCorrect;
  }

  return {
    validateAnswer,
    isSortingComplete,
    getScore,
    score,
    correctAnswer,
    resetAnswer,
  };
}
