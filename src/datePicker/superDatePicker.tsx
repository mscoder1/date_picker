import styles from "./superDatePicker.module.css";
import { FiArrowRight } from "react-icons/fi";
import Modal from "./modal/modal";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import NowDate from "./modal/content/nowDate/nowDate";

interface IDataContext {
    setData: Dispatch<SetStateAction<{
      start: string;
      startText: string;
      end: string;
      endText: string;
    }>>;
}

export const DataContext = createContext<IDataContext>({
    setData: () => {},
});

const SuperDatePicker = () => {
  const [modalStart, setModalStart] = useState(false);
  const [modalEnd, setModalEnd] = useState(false);

  const [data, setData] = useState({
    start: "",
    startText: "Select start time",
    end: "",
    endText: "Select end time",
  });

  const openStart = () => {
    setModalStart((prev) => !prev);
    setModalEnd(false);
  };

  const openEnd = () => {
    setModalEnd((prev) => !prev);
    setModalStart(false);
  };

  const checkIsDatesAreValid = () => {
    if(data.start < data.end) {
      return true
    } else {
      return false
    }
  }
//styles.sdpWrap
// styles.label
  return (
    <DataContext.Provider value={{setData}}>
      <div className={styles.sdpWrap}>
        <label className={(data.start && data.end) ? checkIsDatesAreValid() ? styles.labelValid : styles.labelInvalid : styles.label}>Dates</label>
        <div
          className={modalStart ? styles.datePickActive : styles.datePick}
          onClick={() => openStart()}
        >
          {data.startText}
          <div onClick={(e) => e.stopPropagation()}>
            <Modal isActive={modalStart} isStart={true} />
          </div>
        </div>
        <div className={styles.iconBlock}>
          <FiArrowRight size={15} />
        </div>
        <div
          className={modalEnd ? styles.datePickActive : styles.datePick}
          onClick={() => openEnd()}
        >
          <div onClick={(e) => e.stopPropagation()} className={styles.tech}>
            <Modal isActive={modalEnd} isStart={false} />
          </div>
          {data.endText}
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default SuperDatePicker;
