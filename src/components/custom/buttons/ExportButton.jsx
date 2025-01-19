"use client";

import { exportToExcel } from "@/app/functions/ExcelFunction";
import { Button } from "@/components/ui/button";

const ExportButton = ({ tableData, tableTitle }) => {
  const handleExport = () => {
    exportToExcel(tableData, tableTitle, "requests-data.xlsx");
  };

  return (
    <Button
      type="button"
      className="bg-mainColor-500 duration-300 transition-all hover:bg-mainColor-400 hover:shadow-lg hover:-translate-y-1 text-white"
      onClick={handleExport}
    >
      Export
    </Button>
  );
};
export default ExportButton;
