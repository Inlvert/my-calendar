import { format, addDays, add, startOfMonth, startOfWeek } from 'date-fns';
import React, { useState } from "react";
import styles from "./Day.module.scss";

function Day (props) {
  const [currentDay, setCurrentDay] = useState(new Date())

  return (
    <div>
      <p className={styles.dayOfWeek}>{format(currentDay, 'EEEE')}</p>
      <p className={styles.dayOfMonth}>{format(currentDay, 'd')}</p>
    </div>
  )
};

export default Day;