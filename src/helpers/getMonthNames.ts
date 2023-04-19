import { createDate } from "./createDate"

export const getMonthNames = (locale: string = 'default ') => {
    const monthNames: {
        month: ReturnType<typeof createDate>['month']
        monthShort: ReturnType<typeof createDate>['monthShort']
        monthIndex: ReturnType<typeof createDate>['monthIndex']
        day: ReturnType<typeof createDate>['day']
    }[] = Array.from({length: 12})

    const d = new Date()

    monthNames.forEach((_, i) => {
        const {month, monthIndex, monthShort, day} = createDate({locale, date: new Date(d.getFullYear(), d.getMonth() + i, d.getDate())})
        monthNames[monthIndex] = {month, monthIndex, monthShort, day}
    })

    return monthNames
}