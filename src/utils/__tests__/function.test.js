import { getPropertiesByLevel, getRandomNumber } from "../functions";
import LEVELS from "../../levels.json";

describe("functions tests", () => {
  describe("getRandomNumber tests", () => {
    test.each([
      [0, 1500],
      [0, 10],
      [0, 1],
      [0, 0],
    ])(
      "generating random number from %s to %s, result should be within the max-min limit",
      (min, max) => {
        const res = getRandomNumber(min, max);
        const isWithinLimit = res >= min && res <= max;

        expect(isWithinLimit).toBeTruthy();
      }
    );

    test("generating random number with no params, result should be within 0-10000 limit", () => {
      const res = getRandomNumber();
      const isWithinLimit = res >= 0 && res <= 10000;

      expect(isWithinLimit).toBeTruthy();
    });

    test("generating four random numbers from 0-20000, numbers shouldn't be all equal", () => {
      // Could write in other way, but i think this way its more simple to understand quickly
      const num1 = getRandomNumber(0, 20000);
      const num2 = getRandomNumber(0, 20000);
      const num3 = getRandomNumber(0, 20000);
      const num4 = getRandomNumber(0, 20000);
      const areAllEqual = num1 === num2 && num2 === num3 && num3 === num4;

      expect(areAllEqual).toBeFalsy();
    });
  });

  describe("getPropertiesByLevel tests", () => {
    test.each([
      [1, LEVELS[1]],
      [2, LEVELS[2]],
      [4, LEVELS[4]],
    ])(
      "getting properties by level %s should return %s result",
      (level, expected) => {
        const res = getPropertiesByLevel(level);
        expect(res).toEqual(expected);
      }
    );

    test("getting properties by non-existing level should return null", () => {
      const res = getPropertiesByLevel[LEVELS.length + 1];

      expect(res).toBe(undefined);
    });
  });
});
