export const generateRandomColor = (list = ["red", "blue", "green"]) => {
  const randomNumber = Math.floor(Math.random() * list.length);
  return list[randomNumber];
};

export function generateUniqueId() {
  return `${Date.now() / Math.random()}-${Math.random()
    .toString(16)
    .substring(1, 9)}`;
}

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
