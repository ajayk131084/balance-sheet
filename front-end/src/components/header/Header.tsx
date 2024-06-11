import React from "react";
import { Row } from "../row/Row";
import classNames from "./Header.module.css";
import { CellType } from "../../types/typings";

interface HeaderProps {
  rowType: string;
  cells: CellType[];
}

export const Header: React.FC<HeaderProps> = ({ rowType, cells }) => {
  return (
    <div className={classNames.headerContainer}>
      <Row rowType={rowType} cells={cells} />
    </div>
  );
};
