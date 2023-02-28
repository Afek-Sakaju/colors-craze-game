export const generateRandomColor = (list = ["red", "blue", "green"]) => {
  const randomNumber = Math.floor(Math.random() * list.length);

  return list[randomNumber];
};

export const createMatrix = ({
  rows,
  columns,
  colorsList = null,
  singleColor = "black",
}) => {
  const shouldGenerateColor = colorsList;
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () =>
      shouldGenerateColor ? generateRandomColor(colorsList) : singleColor
    )
  );
};

export const areValidIndexes = (indexArray) => {
  const isValid = !indexArray.some((i) => i === undefined);
  return isValid;
};

export const generateNewSquareColor = ({
  prevColor,
  allowRepeatedColors,
  colorsList,
}) => {
  let currentColor,
    shouldRegenerate = !allowRepeatedColors;

  do {
    currentColor = generateRandomColor(colorsList);
    shouldRegenerate = currentColor === prevColor && shouldRegenerate;
  } while (shouldRegenerate);

  return currentColor;
};
