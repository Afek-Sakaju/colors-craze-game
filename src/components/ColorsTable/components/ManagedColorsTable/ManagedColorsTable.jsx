/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";

import { ColorsTable } from "../../base-components";
import {
  createMatrix,
  pickColor,
  areInvalidIndexes,
  getItemsColorsCount,
  extractIndexesFromId,
  ID_SEPARATOR,
} from "../../utils";

export function ManagedColorsTable({
  backgroundColor,
  rows,
  columns,
  allowRepeatedColors,
  colors,
  onChange,
}) {
  const statesMatrix = useMemo(
    () =>
      createMatrix({
        rows,
        columns,
        colorsList: colors,
      }),
    [rows, columns, colors]
  );
  const [dataMatrix, setDataMatrix] = useState(statesMatrix);

  useEffect(() => {
    setDataMatrix(statesMatrix);
  }, [statesMatrix]);

  useEffect(() => {
    const colorsState = getItemsColorsCount(statesMatrix);
    onChange?.(colorsState);
  }, []);

  const onClick = (id) => {
    const [i, j] = extractIndexesFromId(id, ID_SEPARATOR);
    if (areInvalidIndexes({ i, j, mat: dataMatrix })) return;

    setDataMatrix?.((mat) => {
      const nextColor = pickColor({
        prevColor: mat[i][j].color,
        allowRepeatedColors,
        colorsList: colors,
      });

      mat[i][j].color = nextColor;
      const colorsState = getItemsColorsCount(mat);
      onChange?.(colorsState);
      return [...mat];
    });
  };

  return (
    <ColorsTable
      dataMatrix={dataMatrix}
      onClick={onClick}
      backgroundColor={backgroundColor}
    />
  );
}

ManagedColorsTable.propTypes = {
  backgroundColor: PropTypes.string,
  rows: PropTypes.number,
  columns: PropTypes.number,
  allowRepeatedColors: PropTypes.bool,
  colors: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

ManagedColorsTable.defaultProps = {
  backgroundColor: undefined,
  rows: 1,
  columns: 1,
  allowRepeatedColors: true,
  colors: ["black"],
  onChange: undefined,
};
