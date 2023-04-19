import { useState } from 'react'
import Calendar from '../calendar/calendar'
import styles from './calendarWrap.module.css'

const CalendarWrap = () => {

    const [selectedDate, selectDate] = useState(new Date())

  return (
    <div>
        <Calendar selectDate={selectDate} selectedDate={selectedDate} />
    </div>
  )
}

export default CalendarWrap