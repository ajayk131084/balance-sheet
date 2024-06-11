export type RowType = {
  rowType: string;
  title?: string;
  rows?: RowType[];
  cells?: CellType[];
};

type AttributesType = {
  value: string;
  id: string;
};

export type CellType = {
  value: string;
  attributes?: AttributesType[];
};

export type BalanceSheet = {
  status: string;
  reports: [
    {
      reportId: string;
      reportName: string;
      reportType: string;
      reportTitles: string[];
      reportDate: string;
      updatedDateUtc: string;
      fields: string[];
      rows: RowType[];
    }
  ];
};
