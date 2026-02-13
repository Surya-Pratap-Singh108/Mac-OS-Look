import { useEffect, useState } from "react";

const DateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    },1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatted = now
    .toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replaceAll(",", "")
    .toLowerCase();

  return <div>{formatted}</div>;
};

export default DateTime;
