import type { CSSProperties } from "react";
import { useDraggable } from "@dnd-kit/core";

export default function Object() {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: "carton",
    });

  const styles: { objectImage: CSSProperties } = {
    objectImage: {
      width: "100%",
      height: "auto",
      filter:
        "drop-shadow(0 0 1px #ffe053) drop-shadow(0 0 5px #faf3d3) drop-shadow(0 0 10px #faf3d3) drop-shadow(0 0 20px #faf3d3)",
      transform: transform
        ? `translate3d(${transform.x * 2}px, ${transform.y * 2}px, 0)`
        : undefined,
      scale: isDragging ? 0.5 : 1,
      touchAction: "none",
      cursor: isDragging ? "grabbing" : "grab",
    },
  };
  return (
    <div>
      <img
        style={styles.objectImage}
        src="/images/egg-carton.png"
        alt="Egg Carton"
        ref={setNodeRef}
        {...listeners}
        {...attributes}
      />
    </div>
  );
}
