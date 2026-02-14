// Utility functions for date/time formatting

export function timeStamp(unix) {
  const millisecs = unix * 1000;
  const dateObject = new Date(millisecs);
  const dateResult = dateObject.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });
  return dateResult;
}

export function weekdayStamp(unix) {
  const millisecs = unix * 1000;
  const dateObject = new Date(millisecs);
  const dateResult = dateObject.toLocaleString("en-US", {
    weekday: "short",
  });
  return dateResult;
}

export function hourStamp(unix) {
  const millisecs = unix * 1000;
  const dateObject = new Date(millisecs);
  const dateResult = dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric"
  });
  return dateResult;
}

export function formatDate(date) {
  return date.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function formatTime(date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });
}
