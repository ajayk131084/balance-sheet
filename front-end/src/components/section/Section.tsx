import React from "react";
import { Row } from "../row/Row";
import { RowType } from "../../types/typings";
import classNames from "./Section.module.css";

interface SectionProps {
  rowType: string;
  title: string;
  rows: RowType[];
}

export const Section: React.FC<SectionProps> = ({ rowType, title, rows }) => {
  return (
    <>
      <div
        className={
          rows.length > 0 ? classNames.subSectionTitle : classNames.sectionTitle
        }
      >
        {title}
      </div>
      {rows.map((row, index) => (
        <Row
          rowType={row.rowType}
          cells={row.cells}
          title={title}
          key={index}
        />
      ))}
    </>
  );
};
