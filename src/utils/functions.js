import { generateRandomColor } from "colors-table-react";
import LEVELS from "../levels.json";

export function getRandomNumber() {
  return Math.random() * 999999;
}

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
