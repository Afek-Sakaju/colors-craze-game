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

export function generateEnemyColors(enemyCount) {
  const res = [];
  while (enemyCount--) res.push(generateRandomColor());
  return res;
}
