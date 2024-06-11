import React from "react";
import classNames from "./Cell.module.css";

export interface CellProps {
  value: string;
  rowType?: string;
  index?: number;
  title?: string;
}

export const Cell: React.FC<CellProps> = ({ value, rowType, title, index }) => {
  let cellVariant = "";

  if (title === "") {
    cellVariant =
      index === 0
        ? classNames.overallFirstSummaryCell
        : classNames.overallSummaryCell;
  } else {
    if (rowType === "SummaryRow") {
      cellVariant =
        index === 0
          ? classNames.firstSummaryCell
          : classNames.numberSummaryCell;
    } else if (rowType === "Row") {
      cellVariant =
        index === 0 ? classNames.firstNormalCell : classNames.numberNormalCell;
    }
  }

  return (
    <div className={classNames.cellContainer}>
      <div className={cellVariant}>
        {value[0] === "-" ? `(${value.slice(1)})` : value}
      </div>
    </div>
  );
};
