import { getWeekNumber } from "./getWeekNumber";


interface ICreateDate {
    locale?: string;
    date?: Date;
}

export const createDate = (params?:ICreateDate) => {
    const validLocale = params?.locale ?? 'default'

    const day = params?.date ?? new Date()
    const dayNumber = day.getDate()
    const exactDay = day.toLocaleDateString(validLocale, {weekday: 'long'})
    const dayNumberInWeek = day.getDay() + 1
    const dayShort = day.toLocaleDateString(validLocale, {weekday: 'short'})
    const year = day.getFullYear()
    const yearShort = day.toLocaleDateString(validLocale, {year: '2-digit'})
    const month = day.toLocaleDateString(validLocale, {month: 'long'})
    const monthShort = day.toLocaleDateString(validLocale, {month: 'short'})
    const monthNumber = day.getMonth() + 1
    const monthIndex = day.getMonth()
    const timestamp = day.getTime()
    const week = getWeekNumber(day)

    return {
        day,
        dayNumber,
        exactDay,
        dayNumberInWeek,
        dayShort,
        year,
        yearShort,
        month,
        monthShort,
        monthNumber,
        monthIndex,
        timestamp,
        week
    }
}