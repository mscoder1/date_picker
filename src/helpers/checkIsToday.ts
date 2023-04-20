import { checkIsEqual } from "./checkIsDateEqual"

export const checkIsToday = (date: Date) => {
    const today = new Date()
    return checkIsEqual(today, date)
}