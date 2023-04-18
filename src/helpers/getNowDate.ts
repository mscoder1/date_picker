import { dateFormatter } from "./dateFormatter";

export const getNowDate = () => {
  const now = new Date();
  const {dateMs, dateText} = dateFormatter(now)
  return {
    data: String(dateMs),
    dataText: dateText,
  };
};
