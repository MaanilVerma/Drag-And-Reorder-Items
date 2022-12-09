import React from "react";

import DATA from "../../data/DATA.json";
import { Container } from "../Container";

import styles from "./Outlines.module.scss";

const Outlines = () => {
  const [dragId, setDragId] = React.useState<string>("");
  const [boxes, setBoxes] =
    React.useState<{ title: string; order: number }[]>(DATA);

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    setDragId(event.currentTarget.id);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const dragBox: any = boxes.find((box) => box.title === dragId);
    const dropBox: any = boxes.find(
      (box) => box.title === event.currentTarget.id
    );

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = boxes.map((box) => {
      if (box.title === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.title === event.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    setBoxes(newBoxState);
  };

  return (
    <div className={styles["outline-wrapper"]}>
      <h1 className={styles.header}>Outlines</h1>
      <div className={styles.outlines}>
        {boxes
          .sort((chosenBox, targetBox) => chosenBox.order - targetBox.order)
          .map((box) => (
            <Container
              key={box.title}
              containerTitle={box.title}
              handleDrag={handleDrag}
              handleDrop={handleDrop}
            />
          ))}
      </div>
    </div>
  );
};

export { Outlines };
