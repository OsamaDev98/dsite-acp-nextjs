"use client";

import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { useTranslations } from "next-intl";

const PixelTable = ({ tableData }) => {
  const columnHelper = createColumnHelper();
  const [data, setData] = useState(tableData);

  const t = useTranslations("Pixel");

  const columns = [
    columnHelper.accessor("id", {
      header: "",
    }),
    columnHelper.accessor("name", {
      header: t("name"),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("userId", {
      header: t("user"),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
      header: t("status"),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("actions", {
      header: t("actions"),
      cell: (info) => {
        return (
          <Link
            href="/"
            className="bg-gray-100 px-6 py-2 rounded border dark:bg-mainDark-900"
          >
            {info.getValue() ? info.getValue() : "Enable"}
          </Link>
        );
      },
    }),
  ];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="scroll-container w-full overflow-x-auto grid gap-6">
      <table className="w-full min-w-[1000px]" id="itemsTable">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup?.headers?.map((header) => (
                <th key={header.id} className="text-start">
                  {header.isPlaceholder
                    ? null
                    : typeof header.column.columnDef.header === "function"
                    ? header.column.columnDef.header(header.getContext())
                    : header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-100/70 dark:hover:bg-mainDark-900"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-b">
                  {typeof cell.column.columnDef.cell === "function"
                    ? cell.column.columnDef.cell(cell.getContext())
                    : cell.getContext().renderValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PixelTable;
