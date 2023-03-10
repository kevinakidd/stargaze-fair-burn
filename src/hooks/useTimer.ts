import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

export const useTimer = (dataUpdatedAt: number) => {
  const { seconds, minutes, hours, days, start, reset } = useStopwatch({
    autoStart: false,
  });
  useEffect(() => {
    if (dataUpdatedAt) {
      reset();
      start();
    }
  }, [dataUpdatedAt]);
  return days > 0
    ? `${days} days`
    : hours > 0
    ? `${hours} hours`
    : minutes === 1
    ? "1 minute"
    : minutes > 1
    ? `${minutes} minutes`
    : seconds <= 1
    ? "1 second"
    : `${seconds} seconds`;
};
