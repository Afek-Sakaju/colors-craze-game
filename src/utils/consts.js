import { generateEnemyColors } from "./functions";

export const colorsByDifficulty = {
  easy: ["green", "blue", "red", "grey"],
  medium: ["green", "blue", "red", "grey", "black", "gold"],
  hard: [
    "green",
    "blue",
    "red",
    "grey",
    "black",
    "gold",
    "purple",
    "cyan",
    "lime",
    "pink",
  ],
};

export const propertiesByLevel = {
  1: {
    colorsTable: colorsByDifficulty.easy,
    enemyColors: generateEnemyColors(1),
    rows: 3,
    cols: 4,
    countDownSeconds: 200,
  },
  2: {
    colorsTable: colorsByDifficulty.easy,
    enemyColors: generateEnemyColors(1),
    rows: 4,
    cols: 4,
    countDownSeconds: 150,
  },
  3: {
    colorsTable: colorsByDifficulty.easy,
    enemyColors: generateEnemyColors(2),
    rows: 4,
    cols: 4,
    countDownSeconds: 120,
  },
  4: {
    colorsTable: colorsByDifficulty.medium,
    enemyColors: generateEnemyColors(2),
    rows: 4,
    cols: 4,
    countDownSeconds: 100,
  },
  5: {
    colorsTable: colorsByDifficulty.medium,
    enemyColors: generateEnemyColors(3),
    rows: 4,
    cols: 5,
    countDownSeconds: 80,
  },
  6: {
    colorsTable: colorsByDifficulty.hard,
    enemyColors: generateEnemyColors(3),
    rows: 4,
    cols: 5,
    countDownSeconds: 80,
  },
  7: {
    colorsTable: colorsByDifficulty.hard,
    enemyColors: generateEnemyColors(4),
    rows: 5,
    cols: 6,
    countDownSeconds: 70,
  },
};
