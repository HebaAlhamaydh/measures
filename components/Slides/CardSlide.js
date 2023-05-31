import React, { useRef, useState } from "react";
import styles from "../../styles/CardSlide.module.css";
import ModalShyness from "../ModalShynees/ModalShyness";
import { useRouter } from "next/router";

export default function CardSlide(props) {
  const { cardIcon, cardTitle, cardTime, backgroundColor, id } = props;
  const { locale } = useRouter();
  const modalRef = useRef([]);
  const handleClick = () => modalRef.current.showModal();

  console.log(JSON.parse(props.data)[locale].quiz[id]);
  // const rowData = JSON.parse(props.data)[id];
  const rowData = JSON.parse(props.data)[locale].quiz[id];
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
      <ModalShyness
        data={rowData}
        cardIcon={cardIcon}
        modalRef={modalRef}
        id={id}
        backgroundColor={backgroundColor}
      />
    </>
  );
}
