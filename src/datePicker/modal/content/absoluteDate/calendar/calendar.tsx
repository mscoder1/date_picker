import { useCalendar } from "../../../../../hooks/useCalendar";
import styles from './calendar.module.css'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { checkIsToday } from "../../../../../helpers/checkIsToday";
import { checkIsEqual } from "../../../../../helpers/checkIsDateEqual";
import { useEffect, useState } from "react";
import TimePicker from "../timePicker/timePicker";


interface ICalendar {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
    firstWeekDay?: number;
}
 
const Calendar = ({ firstWeekDay = 2, selectDate, selectedDate, locale='en-US' }: ICalendar) => {

const {state, functions} = useCalendar({locale, selectedDate, firstWeekDay})

const [date, setDate] = useState<any>(new Date())

const [data, setData] = useState({
    hours: '00',
    minutes: '05',
})

useEffect(() => {
    let newDate = new Date(date);
    newDate.setHours(+data.hours);
    newDate.setMinutes(+data.minutes);
    newDate.setSeconds(0);
    selectDate(newDate)
}, [data, date])

  return (
    <div className={styles.calendarWrap}>
        <div className={styles.calendarHeader}>
            <div className={styles.arrowLeft} onClick={() => functions.onClickArrow('left')}>
                <FiArrowLeft size={20} color={'black'} />
            </div>
            {state.mode === 'days' && (
                <div className={styles.headerInfo} onClick={() => functions.setMode('monthes')}>
                    {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
                </div>
            )}
            {state.mode === 'monthes' && (
                <div className={styles.headerInfo} onClick={() => functions.setMode('years')}>
                    {state.selectedYear}
                </div>
            )}
            {state.mode === 'years' && (
                <div className={styles.headerInfo} >
                    {state.selectedYearInterval[0]} -{' '}
                    {state.selectedYearInterval[state.selectedYearInterval.length - 1]}
                </div>
            )}
            <div className={styles.arrowRight} onClick={() => functions.onClickArrow('right')}>
                <FiArrowRight size={20} color={'black'} />
            </div>
        </div>
        <div className={styles.calendarBody}>
            {state.mode === 'days' && (
                <>
                   <div className={styles.calendarWeekNames}>
                    {state.weekDaysNames.map((weekDaysNames) =>(
                        <div key={weekDaysNames.dayShort}>
                            {weekDaysNames.dayShort}
                        </div>
                    ))}
                   </div>
                   <div className={styles.calendarDays}>
                    {state.calendarDays.map((day) => {
                        const isToday = checkIsToday(day.day)
                        const isSelectedDay = checkIsEqual(day.day, state.selectedDate.day)
                        const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex

                        return(
                        <div key={`${day.dayNumber}-${day.monthIndex}`}
                            onClick={() => {
                                functions.setSelectedDate(day)
                                setDate(day.day);
                            }}
                            className={[
                                styles.calendarDay,
                                isToday ? styles.calendarTodayItem : '',
                                isSelectedDay ? styles.calendarSelectedItem : '',
                                isAdditionalDay ? styles.calendarAdditionalDay : '',
                            ].join(' ')}
                        >
                            {day.dayNumber}
                        </div>)
                    })}
                   </div>
                </>
            )}
            {state.mode === 'monthes' && (
                <div className={styles.calendarPickItemContainer}>
                    {state.monthesNames.map(monthesName => {
                        const isCurrentMonth = 
                        new Date().getMonth() === monthesName.monthIndex && 
                        new Date().getFullYear() === state.selectedYear
                        const isSelectedMonth = monthesName.monthIndex === state.selectedMonth.monthIndex
                        return <div
                            key={monthesName.monthShort}
                            onClick={() => {
                                functions.setSelectedMonthByIndex(monthesName.monthIndex)
                                functions.setMode('days')
                            }}
                            className={[
                            styles.calendarPickItem,
                            isCurrentMonth ? styles.calendarTodayItem : '',
                            isSelectedMonth ? styles.calendarSelectedItem : '',].join(' ')}>
                            {monthesName.monthShort}
                        </div>
                    })}
                </div>
            )}
            {state.mode === 'years' && (
                <div className={styles.calendarPickItemContainer}>
                <div className={styles.calendarUnchoosableYear}>{state.selectedYearInterval[0] - 1}</div>
                {state.selectedYearInterval.map(year => {
                    const isCurrentYear = new Date().getFullYear() === year
                    const isSelectedYear = year === state.selectedYear
                    return <div
                        key={year}
                        onClick={() => {
                            functions.setSelectedYear(year)
                            functions.setMode('monthes')
                        }}
                        className={[
                        styles.calendarPickItem,
                        isCurrentYear ? styles.calendarTodayItem : '',
                        isSelectedYear ? styles.calendarSelectedItem : '',].join(' ')}>
                        {year}
                    </div>
                })}
                <div className={styles.calendarUnchoosableYear}>{state.selectedYearInterval[state.selectedYearInterval.length - 1] + 1}</div>
            </div>
            )}
        </div>
        <TimePicker data={data} setData={setData} />
    </div>
  )
}

export default Calendar