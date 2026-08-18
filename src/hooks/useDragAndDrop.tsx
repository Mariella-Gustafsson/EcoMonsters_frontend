import { useState } from "react";
import type { DragOverEvent, DragEndEvent } from "@dnd-kit/core";

export function useDragAndDrop() {
  const [isOverDropZone, setIsOverDropZone] = useState(false);
  const [itemDropped, setItemDropped] = useState(false);
  const [dropId, setDropId] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const reset = () => {
    setItemDropped(false);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { over } = event;

    if (!over) {
      setIsOverDropZone(false);
      setDropId(null);
      setActiveItem(null);
      setActiveItemId(null);
      return;
    }

    setIsOverDropZone(true);
    setDropId(String(over.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setDropId(null);
      setIsOverDropZone(false);
      reset();
      return;
    }

    setItemDropped(true);

    const materialType = active?.data?.current?.materialType;

    setIsOverDropZone(true);
    setDropId(String(over.id));
    setActiveItem(materialType);
    setActiveItemId(Number(active.id) || null);
  };

  return {
    isOverDropZone,
    dropId,
    activeItem,
    handleDragOver,
    handleDragEnd,
    activeItemId,
    itemDropped,
    reset,
  };
}
