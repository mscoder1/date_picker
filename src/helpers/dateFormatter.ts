export const dateFormatter = (dateToFormat: Date) => {
  const date = dateToFormat.getDate().toString().padStart(2, "0");
  const month = (dateToFormat.getMonth() + 1).toString().padStart(2, "0");
  const year = dateToFormat.getFullYear();
  const hours = dateToFormat.getHours().toString().padStart(2, "0");
  const minutes = dateToFormat.getMinutes().toString().padStart(2, "0");
  const seconds = dateToFormat.getSeconds().toString().padStart(2, "0");
  const validNowDate = dateToFormat.getTime();
  const formattedDateTime = `${date}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  return {
    dateMs: validNowDate,
    dateText: formattedDateTime
  };
};
