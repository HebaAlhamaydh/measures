import { useRef, useState } from "react";

import { AiOutlineRight } from "react-icons/ai";
import styles from "../../styles/ModalShyness.module.css";

import ModalShynessQuiz from "./ModalShynessQuiz";
import { useRouter } from "next/router";

export default function ModalShyness({
  modalRef,
  data,
  id,
  backgroundColor,
  cardIcon,
}) {
  const { locale } = useRouter();

  const handleClose = () => {
    modalRef.current.close();
  };

  const modalQuizRefs = useRef([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  ///////////////////show quiz modal////////////
  const handleQuizClick = (id) => {
    if (modalQuizRefs.current[id]) {
      /*updates the state variable currentQuestion with the next question number:*/
      setCurrentQuestion(id + 1);
      modalQuizRefs.current[id].showModal();
    }
  };
  //////////////////go back to previous maodal////////////
  const handleQuizClose = (id) => {
    /* checks if a modal reference exists at the specified index (id) in the modalQuizRefs array 
    If the modal reference exists, it means that the modal has been rendered and stored in the modalQuizRefs array.*/
    if (modalQuizRefs.current[id]) {
      /*If it does, the close method is called on that reference.*/
      setCurrentQuestion((prev) => prev - 1);
      modalQuizRefs.current[id].close();
      setCurrentQuestion(null);
    }
  };
  ///////////////////close all modals//////////
  const handleCloseAll = () => {
    handleClose();
    modalQuizRefs.current.forEach((modalRef) => {
      if (modalRef && modalRef.close) {
        modalRef.close();
      }
    });
  };

  /////////////////*************//////////////
  const start = locale === "en" ? `start` : `البدأ الآن `;
  const textTwo =
    locale === "en"
      ? `Disclaimer:These tests arent a diagnostic tool or a therapeutic tool and dont dispense with consulting a doctor or psychotherapist `
      : `تنويه هذه الاختبارات ليست أداة تشخيص أو أداة علاجية و لا تغني عن جلسة الطبيب أو المعالج النفسي`;
  return (
    <>
      <dialog
        ref={modalRef}
        className={`${styles.dialog} ${
          id ? styles[`animation${id}`] : styles.hidden
        }`}
      >
        <div className={styles.modalContent}>
          <div
            className={styles.headerContent}
            style={{ backgroundColor: backgroundColor }}
          >
            <button className={styles.btnClose} onClick={handleClose}>
              <AiOutlineRight />
            </button>

            <p className={styles.icon}>{cardIcon}</p>
          </div>
          <div className={styles.textModal}>
            <h2>{data.title}</h2>
            <p>{data.textOne}</p>
            <p>{data.textTwo}</p>
            <p className={styles.note}>{textTwo}</p>
            <p className={styles.scale}>{data.scale}</p>
            <button
              style={{ backgroundColor: backgroundColor }}
              className={styles.startButton}
              onClick={() => handleQuizClick(0)}
            >
              {start}
            </button>
          </div>
        </div>
      </dialog>

      {data.questions.map((question, index) => (
        <ModalShynessQuiz
          id={id}
          handleOpen={() => handleQuizClick(index + 1)}
          handleClose={() => handleQuizClose(index)}
          key={`${question.modalId}-${question.id}`}
          modalQuizRef={(ref) => (modalQuizRefs.current[index] = ref)}
          currentQuestion={currentQuestion}
          question={question}
          answer={question.options}
          totalQuestions={data.questions.length}
          backgroundColor={data.backgroundColor}
          active={currentQuestion}
          handleCloseAll={handleCloseAll}
        />
      ))}
    </>
  );
}
