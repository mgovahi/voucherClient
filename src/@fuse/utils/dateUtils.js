import moment from "jalali-moment";
export const getFirstDayOfMonth = (date, locale) => {
  let firstOfMonth = moment(date ? date : new Date());
  let day = locale == "fa" ? firstOfMonth.jDate() : firstOfMonth._d.getDate();
  firstOfMonth._d.setDate(firstOfMonth._d.getDate() - day + 1);
  return firstOfMonth._d;
};
