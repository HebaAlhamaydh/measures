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

  // const handleAnswerClick = (answer) => {
  //   setSelectedAnswer(answer);
  // };
  ////////////////////////set selected answer///////////////////
  //////////(index) number of dialog
  //////////0:{question: {…}, newAnswer: 'نادراً'}////////
  //////////1:{question: {…}, newAnswer: 'غالباً'}//////////
  ////////question:id:2 options:  ['أبداً', 'نادراً', 'أحياناً', 'غالباً', 'دائماً']questions: "كل ما أقوم فيه في العمل يتطلب جهد عالي جداً"
  const handleAnswerClick = (newAnswer) => {
    console.log(selectedAnswer);
    if (selectedAnswer) {
      return setSelectedAnswer((st) => ({
        ...st,
        [index]: { question, newAnswer },
      }));
    }
    return setSelectedAnswer({ [index]: { question, newAnswer } });
  };

  /////////////////go back to previous maodal/////////////////////
  const closeModal = () => {
    // setSelectedAnswer(null);
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
          modalId ? styles[`active${modalId}`] : styles.hidden
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
