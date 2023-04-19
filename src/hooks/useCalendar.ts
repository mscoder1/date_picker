import { useMemo, useState } from "react";
import { createDate } from "../helpers/createDate";
import { CreateMonth } from "../helpers/createMonth";
import { getMonthNames } from "../helpers/getMonthNames";


interface IUseCalendar {
    locale?: string;
    selectedDate: Date;
}

export const useCalendar = ({locale = 'default', selectedDate: date}:IUseCalendar) => {

    const [mode, setMode] = useState<'days'| 'monthes' | 'years'>('days')
    const [selectedDate, setSelectedDate] = useState(createDate({date}))
    const [selectedMonth, setSelectedMonth] = useState(CreateMonth({date: new Date(selectedDate.year,  selectedDate.monthIndex), locale }))
    const [selectedYear, setSelectedYear] = useState(selectedDate.year)

    const monthesNames = useMemo(() => getMonthNames(locale), [])

    console.log(monthesNames)

    return {

    }
}