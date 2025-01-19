import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportToExcel = (
  data,
  title = "Table Title",
  filename = "requests-data.xlsx"
) => {
  // Create a new workbook and add a worksheet
  const workbook = XLSX.utils.book_new();

  // Add the title row and merge cells
  const titleRow = [[title]]; // Title as the first row
  const worksheet = XLSX.utils.json_to_sheet([]);

  // Append the title to the worksheet
  XLSX.utils.sheet_add_aoa(worksheet, titleRow, { origin: "A1" });

  // Append the table data below the title
  XLSX.utils.sheet_add_json(worksheet, data, { origin: "A2" });

  // Merge the cells for the title row
  const colCount = Object.keys(data[0]).length; // Number of columns in the data
  worksheet["!merges"] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: colCount - 1 } }, // Merge from A1 to last column
  ];

  // Append the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Write the workbook to a binary string and trigger a download
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, filename);
};
