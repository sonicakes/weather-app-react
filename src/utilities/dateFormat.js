import { format } from "date-fns";

export const formatTime = (cur, type) => {
  const date = new Date(cur);
  return type === "week"
    ? format(date, "EEEE, MMM d, yyyy")
    : type === "weekOnly"
    ? format(date, "EEEE")
      : type === "weekShortened"
    ? format(date, "EEE")
    : format(date, "h:mm a");
};

