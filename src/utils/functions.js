/* eslint-disable default-case */
import { generateRandomColor } from "../components/ColorsTable/utils/functions";

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

  return isEnemyInMatrix(matrix, enemyColors);
}

export function randomiseColorsFromList(colorsCount, colorsList) {
  const res = [];
  while (colorsCount--) res.push(generateRandomColor(colorsList));
  return res;
}

export function getPropertiesByLevel(level, colorsList) {
  if (level < 1 || level > 5) return;

  const properties = {};
  const colorsListLength = colorsList?.length || 0;
  /* list should have more colors in order to implement
  other levels at the game as harder due to less colors to pick from a list */
  colorsList =
    colorsListLength > 6
      ? colorsListLength
      : ["green", "red", "blue", "yellow", "pink", "cyan"];

  let updatedColorsList;
  switch (level) {
    case 1:
      properties.colorsTable = colorsList;
      properties.enemyColors = randomiseColorsFromList(1, updatedColorsList);
      properties.rows = level + 2;
      properties.cols = level + 1;
      properties.countDownSeconds = 200 - level * 20;
      break;
    case 2:
      updatedColorsList = randomiseColorsFromList(
        colorsListLength - 1,
        colorsList
      );
      properties.colorsTable = updatedColorsList;
      properties.enemyColors = randomiseColorsFromList(1, updatedColorsList);
      properties.rows = level + 2;
      properties.cols = level + 1;
      properties.countDownSeconds = 200 - level * 20;
      break;
    case 3:
      updatedColorsList = randomiseColorsFromList(
        colorsListLength - 2,
        colorsList
      );
      properties.colorsTable = updatedColorsList;
      properties.enemyColors = randomiseColorsFromList(1, updatedColorsList);
      properties.rows = level + 2;
      properties.cols = level + 1;
      properties.countDownSeconds = 200 - level * 20;
      break;
    case 4:
      updatedColorsList = randomiseColorsFromList(
        colorsListLength - 2,
        colorsList
      );
      properties.colorsTable = updatedColorsList;
      properties.enemyColors = randomiseColorsFromList(2, updatedColorsList);
      properties.rows = level + 2;
      properties.cols = level + 1;
      properties.countDownSeconds = 200 - level * 20;
      break;
    case 5:
      updatedColorsList = randomiseColorsFromList(
        colorsListLength - 3,
        colorsList
      );
      properties.colorsTable = updatedColorsList;
      properties.enemyColors = randomiseColorsFromList(2, updatedColorsList);
      properties.rows = level + 2;
      properties.cols = level + 1;
      properties.countDownSeconds = 200 - level * 20;
      break;
  }

  return properties;
}
