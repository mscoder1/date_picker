import { useContext, useEffect, useState } from 'react'
import { dateFormatter } from '../../../../../helpers/dateFormatter'
import { DataContext } from '../../../../superDatePicker'
import Calendar from '../calendar/calendar'
import styles from './calendarWrap.module.css'

interface ICalendarWrap {
    isStart: boolean;
}

const CalendarWrap = ({isStart}: ICalendarWrap) => {
    const setData = useContext(DataContext);

    const [selectedDate, selectDate] = useState(new Date())

    const {dateMs, dateText} = dateFormatter(selectedDate)

    useEffect(() => {
        setData.setData((prev) => {
            return isStart
              ? {
                  ...prev,
                  start: String(dateMs),
                  startText: dateText,
                }
              : { ...prev,
                  end: String(dateMs),
                  endText: dateText
              };
          });
    }, [selectedDate])

  return (
    <div>
        <Calendar selectDate={selectDate} selectedDate={selectedDate} />
    </div>
  )
}

export default CalendarWrap