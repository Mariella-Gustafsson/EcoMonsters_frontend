import Header from "../components/layout/header";
import MonsterSection from "../components/layout/monster-section";
import ObjectSection from "../components/layout/object-section";
import { DndContext } from "@dnd-kit/core";

function GameView() {
  const handleDragEnd = (event: any) => {
    console.log("DRAG END TRIGGERED", event);
    const { active, over } = event;
    if (!over) return;
    if (active.id === over.id) {
      console.log("Dropped on the correct monster!");
    } else {
      console.log("Dropped on the wrong monster!");
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Header />
      <MonsterSection />
      <ObjectSection />
    </DndContext>
  );
}

export default GameView;
