import moment from "moment-timezone";

export const isOpen = (schedules) => {
  const today = moment().locale("en").format("dddd").toUpperCase();
  const now = moment().tz("Europe/Paris");
  let isOpen = false;

  Object.keys(schedules).forEach((key) => {
    if (key === today && schedules[key].isActive === true) {
      const schedule = schedules[key].schedules[0];
      const openingTime = moment(schedule.startTime, "HH:mm");
      const closingTime = moment(schedule.endTime, "HH:mm");
      isOpen = now.isBetween(openingTime, closingTime);
    }
  });

  return isOpen;
};
