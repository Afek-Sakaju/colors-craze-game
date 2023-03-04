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
  tableProperties,
  allowRepeatedColors,
  onChange,
}) {
  const [dataMatrix, setDataMatrix] = useState(
    createMatrix({
      rows: tableProperties.rows,
      columns: tableProperties.columns,
      colorsList: tableProperties.colors,
    })
  );

  useEffect(() => {
    const colorsState = getItemsColorsCount(dataMatrix);
    onChange?.(colorsState);
  }, []);

  const onClick = (id) => {
    const [i, j] = extractIndexesFromId(id, ID_SEPARATOR);
    if (areInvalidIndexes({ i, j, mat: dataMatrix })) return;

    setDataMatrix?.((mat) => {
      const nextColor = pickColor({
        prevColor: mat[i][j].color,
        allowRepeatedColors,
        colorsList: tableProperties.colors,
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
  tableProperties: PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.string),
    rows: PropTypes.number,
    columns: PropTypes.number,
  }),
  allowRepeatedColors: PropTypes.bool,
  onChange: PropTypes.func,
};

ManagedColorsTable.defaultProps = {
  backgroundColor: undefined,
  tableProperties: {
    colors: ["black"],
    rows: 1,
    columns: 1,
  },
  allowRepeatedColors: true,
  onChange: undefined,
};
