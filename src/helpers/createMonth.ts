import { createDate } from "./createDate"
import { getMonthNumberOfDays } from "./getMonthNumberOfDays"


interface ICreateMonth {
    date?: Date,
    locale?: string,
}

export const CreateMonth = (params?: ICreateMonth) => {
    const date = params?.date ?? new Date()
    const locale = params?.locale ?? 'default'

    const day = createDate({date, locale})
    const {month: monthName, year, monthNumber, monthIndex} = day

    const getDay = (dayNumber: number) => createDate({date: new Date(year, monthIndex, dayNumber), locale})
    const createMonthDays = () => {
        const days = []

        for(let i = 0; i <= getMonthNumberOfDays(monthIndex, year) - 1; i++) {
            days[i] = getDay(i + 1)
        }
        return days
    }
    return {
        getDay,
        monthName,
        monthIndex,
        monthNumber,
        year,
        createMonthDays
    }
}