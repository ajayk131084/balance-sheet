import React from "react";
import { Cell } from "../cell/Cell";
import classNames from "./Row.module.css";
import { type RowType, CellType } from "../../types/typings";

export interface RowProps {
  rowType: string;
  title?: string;
  rows?: RowType[];
  cells?: CellType[];
}

export const Row: React.FC<RowProps> = ({ rowType, cells, title }) => {
  return (
    <div className={classNames.rowContainer}>
      {cells?.map((cell, index) => (
        <Cell
          value={cell.value}
          rowType={rowType}
          title={title}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
};
