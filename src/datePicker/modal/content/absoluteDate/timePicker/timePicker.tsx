import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getTime } from "../../../../../helpers/getTime";
import styles from "./timePicker.module.css";

interface ITimePicker {
    data: {minutes: string, hours: string},
    setData: Dispatch<SetStateAction<{ hours: string; minutes: string; }>>
}

const TimePicker = ({data, setData}: ITimePicker) => {
  const { hours, minutes } = getTime();

  return (
    <div className={styles.timePickerWrap}>
      <select value={data.hours} onChange={e => setData({...data, hours: e.target.value})} className={styles.hoursSelect}>
        {hours.map(hour => <option key={hour} className={styles.option}>{hour}</option>)}
      </select>
      <div className={styles.divider}>:</div>
      <select value={data.minutes} onChange={e => setData({...data, minutes: e.target.value})} className={styles.hoursSelect}>
        {minutes.map(minute => <option key={minute} className={styles.option}>{minute}</option>)}
      </select>
    </div>
  );
};

export default TimePicker;
