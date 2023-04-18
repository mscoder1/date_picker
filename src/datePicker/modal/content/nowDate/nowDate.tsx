import { useContext } from "react";
import styles from "./nowDate.module.css";
import { DataContext } from "../../../superDatePicker";
import { getNowDate } from "../../../../helpers/getNowDate";

interface INowDate {
  isStart: boolean;
}

const NowDate = ({ isStart }: INowDate) => {
  const setData = useContext(DataContext);
  const handleClick = () => {
    const {data, dataText} = getNowDate()
    setData.setData((prev) => {
      return isStart
        ? {
            ...prev,
            start: data,
            startText: dataText,
          }
        : { ...prev,
            end: data,
            endText: dataText
        };
    });
  };

  return (
    <div className={styles.nowDateWrap}>
      <p className={styles.nowDateText}>
        Setting the time to "now" means that on every refresh this time will be
        set to the time of the refresh.
      </p>
      <button onClick={() => handleClick()} className={styles.setNowButton}>
        Set start date and time to now
      </button>
    </div>
  );
};

export default NowDate;
