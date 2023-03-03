export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomColor = (list) => {
  const randomNumber = getRandomNumber(0, list.length - 1);
  list ||= ["black"];

  return list[randomNumber];
};

export const createMatrix = ({ rows, columns, colorsList = null }) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({
      color: generateRandomColor(colorsList),
    }))
  );
};

export function getItemsColorsCount(mat) {
  const colorsState = {};
  mat?.forEach((row) => {
    row?.forEach((itemData) => {
      colorsState[itemData.color] ||= 0;
      colorsState[itemData.color]++;
    });
  });

  return colorsState;
}

export const buildIdFromIndexes = (i, j, separator) => {
  return [i, j].join(separator);
};

export const extractIndexesFromId = (id, separator) => {
  const [i, j] = id.split(separator);
  return [+i, +j];
};

export const areInvalidIndexes = ({ i, j, mat }) => {
  // to prevent the code from crushing when i/j is not a number
  if (typeof i !== "number" || typeof j !== "number") return true;

  const isUndefind = i === undefined || j === undefined;
  const notInRange = i >= mat?.length || j >= mat[i]?.length;
  return !mat || isUndefind || notInRange;
};

export const pickColor = ({ prevColor, allowRepeatedColors, colorsList }) => {
  let currentColor,
    shouldRegenerate = !allowRepeatedColors;

  do {
    currentColor = generateRandomColor(colorsList);
    shouldRegenerate = currentColor === prevColor && shouldRegenerate;
  } while (shouldRegenerate);

  return currentColor;
};
