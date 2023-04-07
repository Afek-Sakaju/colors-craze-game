import LEVELS from "../levels.json";

/**
 *
 * Generates a random integer between a given range, if range isn't provided
 * generates from 0 - 10000
 * @function
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} - A random integer between the min-max range (inclusive).
 */
export const getRandomNumber = (min = 0, max = 10000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 *
 * Retrieves the color properties for a specific level from the LEVELS object.
 * @param {number} level - The level number.
 * @returns {object|null} - An object containing the color properties for the level, or null if the level does not exist.
 */
export function getPropertiesByLevel(level) {
  return LEVELS[level];
}
