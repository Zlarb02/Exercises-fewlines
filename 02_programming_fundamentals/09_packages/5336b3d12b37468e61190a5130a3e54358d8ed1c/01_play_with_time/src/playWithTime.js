import moment from "moment";
const formatDate = (date) => {
  moment.locale();
  return moment(date).format("dddd Do MMMM YYYY");
};
const yearsSinceDate = (date) => {
  moment.locale();
  return moment(date).format("dddd Do MMMM YYYY");
};
const daysSinceDate = (date) => {
  moment.locale();
  return moment(date).format("dddd Do MMMM YYYY");
};
const getDayFromDate = (date) => {
  moment.locale();
  return moment(date).format("dddd Do MMMM YYYY");
};
export { formatDate, yearsSinceDate, daysSinceDate, getDayFromDate };
