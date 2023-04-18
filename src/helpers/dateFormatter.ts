export const dateFormatter = (now: Date) => {
  const date = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const validNowDate = now.getTime();
  const formattedDateTime = `${date}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  return {
    dateMs: validNowDate,
    dateText: formattedDateTime
  };
};
