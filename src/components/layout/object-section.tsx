import Object from "../ui/object";
import { type CSSProperties } from "react";
import type { Item } from "../../types/item";

interface ObjectSectionProps {
  randomItem: Item | null;
  isLoading: boolean;
}

export default function ObjectSection({
  randomItem,
  isLoading,
}: ObjectSectionProps) {
  const styles: {
    sectionContainer: CSSProperties;
    objectContainer: CSSProperties;
  } = {
    objectContainer: {
      width: "20%",
      borderRadius: "20px",
      minHeight: "0",
    },
    sectionContainer: {
      display: "flex",
      flex: 1,
      height: "100%",
      justifyContent: "center",
      gap: "50px",
    },
  };

  return (
    <div style={styles.sectionContainer}>
      <div style={styles.objectContainer} className="object-section">
        {isLoading ? <p>Loading...</p> : null}
        {!isLoading && randomItem ? (
          <Object image={randomItem.image} category={randomItem.category} />
        ) : null}
      </div>
    </div>
  );
}
