import React, { useEffect, useRef, useState } from "react";
import { AiOutlineExclamationCircle, AiOutlineRight } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import styles from "../../styles/ModalShynessQuiz.module.css";
import { useRouter } from "next/router";

export default function ModalShynessQuiz(props) {
  const { locale } = useRouter();
  const {
    modalId,
    modalQuizRef,
    currentQuestion,
    active,
    question,
    answer,
    totalQuestions,
    backgroundColor,
    handleOpen,
    handleClose,
    handleCloseAll,
    selectedAnswer,
    setSelectedAnswer,
    index,
  } = props;

  const progressBarRef = useRef(null);

  // const [selectedAnswer, setSelectedAnswer] = useState(null);
  const progress = (currentQuestion / totalQuestions) * 100;
  const questionQuiz = question.questions;
  // const handleAnswerClick = (answer) => {
  //   setSelectedAnswer(answer);
  // };
  ////////////////////////set selected answer///////////////////
  //////////(index) number of dialog
  //////////0: {questionQuiz: 'الشعور بقلةأو فقدان الاهتمام أو عدم الاستمتاع بالأمور التي كنت تستمتع بها', newAnswer: 'كل يوم تقريباً'}
  ///////////1: {questionQuiz: 'الشعور بالحزن العميق والشعور باليأس', newAnswer: 'بعض الأيام'}
  //////////2: {questionQuiz: 'الصعوبة في النوم أو النوم أكثر من العادة ', newAnswer: 'أبدا'}

  const handleAnswerClick = (newAnswer) => {
    console.log(selectedAnswer);
    if (selectedAnswer) {
      setSelectedAnswer((st) => ({
        ///creates a new state object,st current state  and adding a new key-value pair to it [index]: { question, newAnswer }
        ...st,
        [index]: { questionQuiz, newAnswer },
      }));
    }
    //inside key(index) creates an object(nested object) with two properties questionQuiz,newAnswer
    // [index]: { questionQuiz: questionQuiz, newAnswer: newAnswer },
  };

  /////////////////go back to previous maodal/////////////////////
  const closeModal = () => {
    // setSelectedAnswer((st) => ({ ...st, [index]: {} }));
    handleClose();
  };

  ///////////////////////////////////close all modal////////////
  const handleCloseAllModal = () => {
    setSelectedAnswer({});
    handleCloseAll();
  };

  ////////////////**************popup alert if not select answer***///////////////////////
  const alertRef = useRef(null);

  const handleQuizClick = () => {
    if (selectedAnswer[index]) {
      handleOpen();
    } else {
      alertRef.current.showModal();
    }
  };

  const closePopup = () => {
    alertRef.current.close();
  };

  ////////////////////////////////////////////////
  const next = locale === "en" ? `next` : ` التالي `;
  const close = locale === "en" ? `close` : ` اغلاق `;
  const selectChoice =
    locale === "en" ? `you must select a choice` : ` يجب اختيار اجابة `;
  //////////////////////////////

  return (
    <>
      <dialog
        key={modalId}
        ref={modalQuizRef}
        className={`${styles.dialog} ${
          modalId ? styles.active : styles.hidden
        }`}
      >
        <div className={styles.modalContent}>
          <div
            className={styles.headerContent}
            style={{ backgroundColor: backgroundColor }}
          >
            <button className={styles.btnClose} onClick={closeModal}>
              <AiOutlineRight />
            </button>
            <button
              className={styles.btnCloseAll}
              onClick={handleCloseAllModal}
            >
              <GrClose />
            </button>
            <h2>{question.questions}</h2>
          </div>

          <ul className={styles.list}>
            {answer &&
              answer.map((answerItem, i) => (
                <li
                  key={i}
                  onClick={() => handleAnswerClick(answerItem)}
                  ////optional chaining  (?.) checks if the newAnswer property exists on the selectedAnswer[index] object
                  className={
                    selectedAnswer[index]?.newAnswer === answerItem
                      ? styles.selected
                      : ""
                  }
                  style={
                    selectedAnswer[index]?.newAnswer === answerItem
                      ? { backgroundColor: backgroundColor }
                      : null
                  }
                >
                  {answerItem}
                </li>
              ))}
          </ul>
          <div className={styles.progressBar}>
            <div
              ref={progressBarRef}
              className={styles.progressBarInner}
              style={{
                width: `${progress}%`,
                backgroundColor: backgroundColor,
              }}
            ></div>
          </div>
          <button
            className={styles.nextButton}
            onClick={handleQuizClick}
            style={{ backgroundColor: backgroundColor }}
          >
            {next}
          </button>
        </div>
      </dialog>
      {/***********alert dialog (must choose answer)**************/}
      <dialog ref={alertRef} className={styles.popup}>
        <div className={styles.alertContainer}>
          <AiOutlineExclamationCircle className={styles.icon} />

          <p className={styles.popupMessage}>{selectChoice} </p>
          <button
            className={styles.popupButton}
            style={{ backgroundColor: backgroundColor }}
            onClick={closePopup}
          >
            {close}
          </button>
        </div>
      </dialog>
    </>
  );
}
