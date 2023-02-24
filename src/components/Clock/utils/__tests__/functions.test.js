import { getDateFormat } from "../";

describe("getDateFormat tests", () => {
  test.each([
    [
      1677237155,
      { day: "Fri", time: "13:12:35", ampm: "PM", timestamp: 1677237155 },
    ],
    //  [
    //      1677237155,
    //      { day: "Fri", time: "13:12:35", ampm: "PM", timestamp: 1677237155 },
    //    ],    [
    //      1677237155,
    //      { day: "Fri", time: "13:12:35", ampm: "PM", timestamp: 1677237155 },
    //    ],    [
    //      1677237155,
    //      { day: "Fri", time: "13:12:35", ampm: "PM", timestamp: 1677237155 },
    //    ],
  ])(
    "function accepts timestamp:%s then returns date:%s",
    (timestamp, result) => {
      const date = getDateFormat(timestamp);
      expect(date).toEqual(result);
    }
  );

  test.each([[false], [null], [undefined]])(
    "function accepts timestamp:%s then returns current date",
    (timestamp) => {
      const localeTime = new Date().toLocaleDateString("en-US", {
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      const [day, time, ampm] = localeTime.split(" ");
      const result = { day, time, ampm, timestamp: new Date().getTime() };

      expect(getDateFormat(timestamp)).toEqual(result);
    }
  );
});
