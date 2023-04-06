import { generateRandomColor } from "colors-table-react";
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

export function isEnemyInMatrix(matrix, enemyColors) {
  matrix.forEach((row) => {
    // eslint-disable-next-line consistent-return
    row.forEach((color) => {
      if (enemyColors.some((enemy) => enemy === color)) return true;
    });
  });
  return false;
}

export function randomizeColorsFromList(colorsList, colorsCount) {
  let tempColorList = colorsList;
  const res = [];

  while (colorsCount--) {
    const generatedColor = generateRandomColor(tempColorList);
    res.push(generatedColor);
    tempColorList = tempColorList.filter((color) => color !== generatedColor);
  }
  return res;
}

export function getPropertiesByLevel(level) {
  return LEVELS[level] ?? null;
}
