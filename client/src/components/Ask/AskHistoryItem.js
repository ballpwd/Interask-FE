import React, { Fragment } from "react";

const AskHistoryItem = ({ ask: { text, date } }) => {
  const d = new Date(date);
  const day = d.getDate();

  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();

  const months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "July",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };
  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];
  const timeHistory =
    day + " " + monthName + " " + year + ", " + hours + " : " + minutes;

  return (
    <Fragment>
      <div className="question-time ">
        <p>{timeHistory}</p>
      </div>
      <div className="textbox">
        <p className="question-text text-break">{text}</p>
      </div>
    </Fragment>
  );
};

export default AskHistoryItem;
