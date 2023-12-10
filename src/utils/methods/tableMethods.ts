/* eslint-disable @typescript-eslint/no-explicit-any */
export const getDiscountValue = (
  discount_value: string,
  discount_type: string
) =>
  discount_type === "FXD" ? `Rs. ${discount_value}` : `${discount_value} %`;

export const getTimeValue = (start_time: string, end_time: string) => {
  const setTimeValue = (start_time: any) => {
    const [hours, minutes] = start_time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const new_set_time = `${hours}:${minutes} ${period}`;
    return new_set_time;
  };
  const start_times = setTimeValue(start_time);
  const end_times = setTimeValue(end_time);

  const time = `${start_times} - ${end_times}`;
  return time;
};

const formattingData = (date: string) => {
  const inputDate = date;
  const dateObject = new Date(inputDate);

  // Options for formatting the date
  const options: any = { weekday: "short", month: "short", day: "numeric" };

  // Format the date
  const formattedDate = dateObject.toLocaleDateString("en-US", options);
  return formattedDate;
};
export const getDateValue = (start_date: string, end_date: string) => {
  const startdate = formattingData(start_date);
  const enddate = formattingData(end_date);
  const date = `${startdate} - ${enddate}`;
  return date;
};
