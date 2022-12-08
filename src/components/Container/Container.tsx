import React from "react";
import styles from "./Container.module.scss";

type Props = {
  containerTitle: string;
  handleDrag: () => void;
  handleDrop: () => void;
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

// style={{
//     backgroundColor: boxColor,
//     border: "1px solid",
//     borderColor: boxColor,
//     borderRadius: "5px",
//     color: "#FFF",
//     width: "30%",
//     height: "100px"
//   }}
