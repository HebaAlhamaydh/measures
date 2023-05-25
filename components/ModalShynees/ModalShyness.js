import { useRef } from "react";
import { RiHeartPulseLine } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";
import styles from "../../styles/ModalShyness.module.css";
import shynessScaleQuestionData from "../../shynessScaleQuestionData";
import ModalShynessQuiz from "./ModalShynessQuiz";

export default function ModalShyness({ modalRef }) {
  const handleClose = () => modalRef.current.close();

  const modalQuizRefs = useRef([]);

  const handleQuizClick = (id) => {
    if (modalQuizRefs.current[id]) {
      modalQuizRefs.current[id].showModal();
    }
  };
  const handleQuizClose = (id) => {
    /* checks if a modal reference exists at the specified index (id) in the modalQuizRefs array */
    if (modalQuizRefs.current[id]) {
      /*If it does, the showModal method is called on that reference.*/
      modalQuizRefs.current[id].close();
    }
  };

  return (
    <>
      <dialog ref={modalRef} className={`${styles.dialog}`}>
        <div className={styles.modalContent}>
          <div className={styles.headerContent}>
            <button onClick={handleClose}>
              <AiOutlineRight />
            </button>
            <p>
              <RiHeartPulseLine className={styles.icon} />
            </p>
          </div>
          <div className={styles.textModal}>
            <h2>مقياس الخجل الاجتماعي</h2>
            <p>
              الجمل التالية متعلقة بوضعك في مجتمعك المحيط و كيف كانت تجربتك في
              هذا الوضع{" "}
            </p>
            <p>من فضلك عبر الى أي مدى تنطبق الجمل التالية عليك </p>
            <p className={styles.note}>
              تنويه: هذه الاختبارات ليست أداة تشخيص أو أداة علاجية و لا تغني عن
              جلسة الطبيب أو المعالج النفسي
            </p>
            <p className={styles.scale}>
              هذه الأداة وفقا لمقياس McCrosKey للخجل الاجتماعي
            </p>
            <button
              className={styles.startButton}
              onClick={() => handleQuizClick(0)}
            >
              البدأ الان
            </button>
          </div>
        </div>
      </dialog>

      {shynessScaleQuestionData.map((item, index) => (
        <ModalShynessQuiz
          handleOpen={() => handleQuizClick(index + 1)}
          handleClose={() => handleQuizClose(index)}
          key={index}
          /*callback is used to store a reference to the current modal component instance in the modalQuizRefs array.
           It takes a function as an argument that receives a reference (ref) to the modal component instance. 
           Inside the function, the reference is assigned to the corresponding index (index) in the modalQuizRefs array  */
          modalQuizRef={(ref) => (modalQuizRefs.current[index] = ref)}
          modalQuizNext={(ref) => (modalQuizRefs.current[index + 1] = ref)}
          question={item.question}
          answerOne={item.answerOne}
          answerTwo={item.answerTwo}
          answerThree={item.answerThree}
          answerFour={item.answerFour}
          answerFive={item.answerFive}
        />
      ))}
    </>
  );
}
