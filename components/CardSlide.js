import React, { useRef, useState } from "react";
import styles from "../styles/CardSlide.module.css";
import ModalShyness from "./ModalShynees/ModalShyness";

export default function CardSlide(props) {
  const { cardIcon, cardTitle, cardTime, backgroundColor } = props;
  const modalRef = useRef(null);
  const handleClick = () => modalRef.current.showModal();
  return (
    <>
      <div
        className={styles.cardContainer}
        style={{
          backgroundColor: backgroundColor,
        }}
        onClick={handleClick}
      >
        <div className={styles.cardIcon}>{cardIcon}</div>
        <div className={styles.cardTitle}>{cardTitle}</div>
        <div className={styles.time}>{cardTime}</div>
      </div>
      <ModalShyness modalRef={modalRef} />
    </>
  );
}
