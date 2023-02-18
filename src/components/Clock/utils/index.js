export * from "./consts";

export function getCurrentDateFormat() {
  return new Date(Date.now()).toLocaleDateString("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }); // format 'DAY HH:MM:SS AM'
}
