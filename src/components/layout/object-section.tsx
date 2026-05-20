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
      borderRadius: "20px",
      minHeight: "0",
      height: "100%",
    },
    sectionContainer: {
      display: "flex",
      flex: 1,
      minHeight: 0,
      justifyContent: "center",
      gap: "50px",
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.sectionContainer}>
      <div style={styles.objectContainer} className="object-section">
        {isLoading ? <p>Loading...</p> : null}
        {!isLoading && randomItem ? (
          <Object
            id={randomItem.id}
            image={randomItem.image}
            materialType={randomItem.materialType}
          />
        ) : null}
      </div>
    </div>
  );
}
