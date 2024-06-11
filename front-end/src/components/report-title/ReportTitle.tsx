import React from "react";
import classNames from "./ReportTitle.module.css";

type ReportTitleProps = {
  titles: string[];
};

export const ReportTitle: React.FC<ReportTitleProps> = ({ titles }) => {
  return (
    <div className={classNames.reportTitleContainer}>
      {titles.map((title, index) => (
        <div key={index}>{title}</div>
      ))}
    </div>
  );
};
