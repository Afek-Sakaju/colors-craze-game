/* eslint-disable default-case */
import { generateRandomColor } from "colors-table-react";
import LEVELS from "../levels.json";

export function getRandomNumber() {
  return Math.random() * 999999;
}

export function isEnemyInMatrix(matrix, enemyColors) {
  matrix.forEach((row) => {
    row.forEach((color) => {
      if (enemyColors.some((enemy) => enemy === color)) return true;
    });
  });
  return false;
}

export function isGameOver(matrix, enemyColors) {
  if (!matrix || !enemyColors) return;

  return !isEnemyInMatrix(matrix, enemyColors);
}

export function randomizeColorsFromList(
  colorsCount,
  colorsList,
  isEnemy = false
) {
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
