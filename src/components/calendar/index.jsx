import React from "react";
import { useState } from "react";
import {
  format,
  startOfMonth,
  startOfWeek,
  lastDayOfMonth,
  lastDayOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
} from "date-fns";
import styles from "./Calendar.module.scss";

function Calendar(props) {
  
  const [currentDay, setCurrentDay] = useState(new Date());
  // first day of currentDay
  const firstDayOfMonth = startOfMonth(currentDay);
  // last day of currentDay
  const lastDay = lastDayOfMonth(currentDay);
  // first day of week of firstDay
  const startDate = startOfWeek(firstDayOfMonth);
  // last day of wee of lastDay
  const endDate = lastDayOfWeek(lastDay);
  // render all days
  const totalDate = eachDayOfInterval({ start: startDate, end: endDate });
  
  const weeks = ((date) => {
    const weeks = [];
    for (let day = 0; day < 7; day++){
      weeks.push(date[day])
    }
    return weeks;
  })(totalDate)

  return (
    <div>
      <div><p className={styles.dayOfWeek}>{format(currentDay, 'MMM y')}</p></div>
      <div className={styles.coloms}>
        {weeks.map((week) => (
          <span className={styles.daysOfWeek}>{format(week, "EEEEE")}</span>
        ))}
        {totalDate.map((date) => (
          <span style={{color: !isSameMonth(date, currentDay) ? '#a1a1a1' : isToday(date, currentDay) ? '#ff0000' : ''}}>{format(date, "d")}</span>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
