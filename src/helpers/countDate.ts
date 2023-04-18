import { dateFormatter } from "./dateFormatter";

export const countDate = (count: string, countMs: number) => {
    const dateInMs = new Date().getTime()
    const sum = +dateInMs + +count * countMs;
    const date = new Date(sum)
    const {dateMs, dateText} = dateFormatter(date)
    console.log(dateText)
    return {
        dateMs: dateMs,
        dateText: dateText,
    }
}