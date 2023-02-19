export const generateRandomColor = (list = ["red", "blue", "green"]) => {
  const randomNumber = Math.floor(Math.random() * list.length);
  return list[randomNumber];
};

export const createMatrix = ({
  rows,
  columns,
  colorGenerateFunc = null,
  colorsList = null,
  singleColor = "black",
}) => {
  const shouldGenerateColor = colorGenerateFunc && colorsList;
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () =>
      shouldGenerateColor ? colorGenerateFunc(colorsList) : singleColor
    )
  );
};
