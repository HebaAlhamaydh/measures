import React, { useEffect, useRef, useState } from "react";
import { AiOutlineExclamationCircle, AiOutlineRight } from "react-icons/ai";
import styles from "../../styles/ModalShynessQuiz.module.css";
export default function ModalShynessQuiz(props) {
  const {
    modalQuizRef,
    modalQuizNext,
    question,
    answerOne,
    answerTwo,
    answerThree,
    answerFour,
    answerFive,
    handleOpen,
    handleClose,
  } = props;

  const alertRef = useRef(null);
  const progressBarRef = useRef(null);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [currentQuestion, setCurrentQuestion] = useState(1);

  const totalQuestions = 13;

  const progress = (currentQuestion / totalQuestions) * 100;

  const closeModal = () => handleClose();

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleQuizClick = () => {
    if (selectedAnswer && currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      handleOpen();
    } else {
      alertRef.current.showModal();
    }
  };

  const closePopup = () => {
    alertRef.current.close();
  };
  useEffect(() => {
    progressBarRef.current.style.width = `${progress}%`;
  }, [progress]);
  return (
    <>
      <dialog ref={modalQuizRef} className={`${styles.dialog}`}>
        <div className={styles.modalContent}>
          <div className={styles.headerContent}>
            <button onClick={closeModal}>
              <AiOutlineRight />
            </button>
            <h2>{question}</h2>
          </div>

          <ul className={styles.list}>
            <li
              onClick={() => handleAnswerClick(answerOne)}
              className={selectedAnswer === answerOne ? styles.selected : ""}
            >
              {answerOne}
            </li>
            <li
              onClick={() => {
                handleAnswerClick(answerTwo);
              }}
              className={selectedAnswer === answerTwo ? styles.selected : ""}
            >
              {answerTwo}
            </li>
            <li
              onClick={() => {
                handleAnswerClick(answerThree);
              }}
              className={selectedAnswer === answerThree ? styles.selected : ""}
            >
              {answerThree}
            </li>
            <li
              onClick={() => {
                handleAnswerClick(answerFour);
              }}
              className={selectedAnswer === answerFour ? styles.selected : ""}
            >
              {answerFour}
            </li>
            <li
              onClick={() => {
                handleAnswerClick(answerFive);
              }}
              className={selectedAnswer === answerFive ? styles.selected : ""}
            >
              {answerFive}
            </li>
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
