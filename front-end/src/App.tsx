import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Section } from "./components/section/Section";
import { Header } from "./components/header/Header";
import { ReportTitle } from "./components/report-title/ReportTitle";
import { BalanceSheet, type RowType } from "./types/typings";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<{
    rows: RowType[];
    reportTitles: string[];
  } | null>(null);
  const [error, setError] = useState<string>("");

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const response: Response = await fetch("/api/reports/BalanceSheet");

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const balanceSheet: BalanceSheet = await response.json();

      setReport({
        rows: balanceSheet.reports[0].rows,
        reportTitles: balanceSheet.reports[0].reportTitles,
      });

      setLoading(false);
    } catch (err) {
      setError(`${err}`);
      setLoading(false);
      setReport(null);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="container">
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        report && (
          <div className="sheetWrapper">
            <ReportTitle titles={report.reportTitles} />
            {report.rows.map((row: RowType, index: number) => {
              if (row.rowType === "Section") {
                return (
                  row.rows && (
                    <Section
                      rowType={row.rowType}
                      title={row.title ?? ""}
                      rows={row.rows}
                      key={index}
                    />
                  )
                );
              } else if (row.rowType === "Header") {
                return (
                  row.cells && (
                    <Header
                      cells={row.cells}
                      rowType={row.rowType}
                      key={index}
                    />
                  )
                );
              } else {
                return null;
              }
            })}
          </div>
        )
      )}
    </div>
  );
};

export default App;
