"use client";

import { exportToExcel } from "@/app/functions/ExcelFunction";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const ExportButton = ({ tableData, tableTitle }) => {
  const tb = useTranslations("Buttons");

  const handleExport = () => {
    exportToExcel(tableData, tableTitle, "requests-data.xlsx");
  };

  return (
    <Button
      type="button"
      className="bg-mainColor-500 duration-300 transition-all hover:bg-mainColor-400 hover:shadow-lg hover:-translate-y-1 text-white"
      onClick={handleExport}
    >
      {tb("export")}
    </Button>
  );
};
export default ExportButton;
