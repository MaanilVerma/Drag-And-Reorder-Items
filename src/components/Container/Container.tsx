import React from "react";
import styles from "./Container.module.scss";

type Props = {
  containerTitle: string;
  handleDrag: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
};

const Container: React.FC<Props> = ({
  containerTitle,
  handleDrag,
  handleDrop,
}) => {
  return (
    <div
      draggable={true}
      id={containerTitle}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}
      className={styles.container}
    >
      {containerTitle}
    </div>
  );
};

export { Container };
