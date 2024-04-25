import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimeWithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const formatHour = (hour) => {
    if (hour === 0) {
      return 12;
    } else if (hour > 12) {
      return hour - 12;
    } else {
      return hour;
    }
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">
          {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))} :{" "}
          {formatTimeWithLeadingZero(currentTime.getMinutes())} :{" "}
          {formatTimeWithLeadingZero(currentTime.getSeconds())}
          {currentTime.getHours() >= 12 ? " PM" : " AM"}
        </div>
        <div className="date">Tuesday, February 27, 2024</div>
      </div>
    </>
  );
}

export default App;
