import { useCalendar } from "../../../../../hooks/useCalendar";


interface ICalendar {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
}

const Calendar = ({ selectDate, selectedDate, locale='en-US' }: ICalendar) => {
    const {} = useCalendar({locale, selectedDate})
  return (
    <div>
        Calendar
    </div>
  )
}

export default Calendar