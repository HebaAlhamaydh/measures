import React, { useEffect, useRef, useState } from "react";
import { AiOutlineExclamationCircle, AiOutlineRight } from "react-icons/ai";
import styles from "../../styles/ModalShynessQuiz.module.css";
export default function ModalShynessQuiz(props) {
  const {
    modalQuizRef,
    currentQuestion,
    active,
    question,
    answer,
    handleOpen,
    handleClose,
  } = props;

  const alertRef = useRef(null);

  const progressBarRef = useRef(null);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const totalQuestions = 13;

  const progress = (currentQuestion / totalQuestions) * 100;

  const closeModal = () => handleClose();

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleQuizClick = () => {
    if (selectedAnswer) {
      handleOpen();
    } else {
      alertRef.current.showModal();
    }
  };

  const closePopup = () => {
    alertRef.current.close();
  };

  return (
    <>
      <dialog
        ref={modalQuizRef}
        className={`${styles.dialog} ${active ? styles.active : styles.hidden}`}
      >
        <div className={styles.modalContent}>
          <div className={styles.headerContent}>
            <button onClick={closeModal}>
              <AiOutlineRight />
            </button>
            <h2>{question}</h2>
          </div>

          <ul className={styles.list}>
            {answer &&
              answer.map((answerItem, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswerClick(answerItem)}
                  className={
                    selectedAnswer === answerItem ? styles.selected : ""
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
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <button className={styles.nextButton} onClick={handleQuizClick}>
            التالي
          </button>
        </div>
      </dialog>

      <dialog ref={alertRef} className={styles.popup}>
        <div className={styles.alertContainer}>
          <AiOutlineExclamationCircle className={styles.icon} />

          <p className={styles.popupMessage}>يجب اختيار اجابة</p>
          <button className={styles.popupButton} onClick={closePopup}>
            إغلاق
          </button>
        </div>
      </dialog>
    </>
  );
}
