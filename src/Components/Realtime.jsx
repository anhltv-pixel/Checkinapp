import { useState, useEffect } from "react";

function Realtime() {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, []);
  return (
    <div className="Realtime">
      <h2 className="Realtime_time">
        {currentDate.toLocaleString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })}
      </h2>
      <p className="Realtime_date">
        {currentDate.toLocaleDateString("vi-VN", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
    </div>
  );
}

export default Realtime;
