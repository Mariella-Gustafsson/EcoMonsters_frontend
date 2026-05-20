import type { CSSProperties } from "react";
import { useDraggable } from "@dnd-kit/core";

interface ObjectProps {
  image?: string;
  materialType: string;
  id: number;
}

export default function Object({ image, materialType, id }: ObjectProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
      data: { materialType },
    });

  const styles: { objectImage: CSSProperties } = {
    objectImage: {
      width: "auto",
      height: "100%",
      objectFit: "contain",
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
    <img
      style={styles.objectImage}
      src={image}
      alt={materialType}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    />
  );
}
