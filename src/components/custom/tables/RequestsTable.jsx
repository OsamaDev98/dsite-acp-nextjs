"use client";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import { useState } from "react";

const RequestsTable = ({ tableData }) => {
  const t = useTranslations("RequestsTable");

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("requestDate", {
      header: t("request"),
      cell: (info) => {
        return <span>{info.getValue() ? info.getValue() : "-"}</span>;
      },
    }),
    columnHelper.accessor("fullname", {
      header: t("name"),
      cell: (info) => {
        return <span>{info.getValue() ? info.getValue() : "-"}</span>;
      },
    }),
    columnHelper.accessor("mobile", {
      header: t("mobile"),
      cell: (info) => {
        return <span>{info.getValue() ? info.getValue() : "-"}</span>;
      },
    }),
    columnHelper.accessor("email", {
      header: t("email"),
      cell: (info) => {
        return <span>{info.getValue() ? info.getValue() : "-"}</span>;
      },
    }),
    columnHelper.accessor("date", {
      header: t("date"),
      cell: (info) => {
        return <span>{info.getValue() ? info.getValue() : "-"}</span>;
      },
    }),
    columnHelper.accessor("time", {
      header: t("time"),
      cell: (info) => {
        return <span>{info.getValue() ? info.getValue() : "-"}</span>;
      },
    }),
    columnHelper.accessor("description", {
      header: t("description"),
      cell: (info) => {
        return <span>{info.getValue() ? info.getValue() : "-"}</span>;
      },
    }),
    columnHelper.accessor("radio", {
      header: t("radio"),
      cell: (info) => {
        return <span>{info.getValue() ? info.getValue() : "-"}</span>;
      },
    }),
  ];

  const [data, setData] = useState(tableData);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    // Pagination
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });
  // Pages number
  const renderPageNumbers = () => {
    const totalPages = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex;
    const visiblePages = [];

    if (totalPages <= 3) {
      for (let i = 0; i < totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      if (currentPage > 1) visiblePages.push(0);
      if (currentPage > 2) visiblePages.push("...");
      visiblePages.push(
        Math.max(0, currentPage - 1),
        Math.min(totalPages - 1, currentPage + 1)
      );
      if (currentPage < totalPages - 3) visiblePages.push("...");
      if (currentPage < totalPages - 2) visiblePages.push(totalPages - 1);
    }
    return visiblePages;
  };

  return (
    <div className="scroll-container w-full overflow-x-auto grid gap-6">
      <table className="w-full min-w-[1000px]" id="itemsTable">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup?.headers?.map((header) => (
                <th key={header.id} className="text-start text-sm">
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
                <td key={cell.id} className="border-b text-[15px]">
                  {typeof cell.column.columnDef.cell === "function"
                    ? cell.column.columnDef.cell(cell.getContext())
                    : cell.getContext().renderValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-end gap-4 flex-wrap w-full">
        <div className="flex items-center gap-1 border rounded">
          <button
            className="rounded py-2 px-4 cursor-pointer hover:bg-mainColor-500 hover:text-white disabled:cursor-not-allowed disabled:bg-transparent disabled:text-gray-400"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span>First</span>
          </button>
          {/* Pagination Controls */}
          <div className="flex items-center justify-center space-x-2">
            {renderPageNumbers().map((page, index) =>
              typeof page === "string" ? (
                <span key={index} className="px-3 py-1 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => table.setPageIndex(page)}
                  className={`px-3 py-1 rounded hover:bg-mainColor-500 hover:text-white ${
                    table.getState().pagination.pageIndex === page
                      ? "bg-mainColor-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {page + 1}
                </button>
              )
            )}
          </div>
          <button
            className="rounded py-2 px-4 cursor-pointer hover:bg-mainColor-500 hover:text-white disabled:cursor-not-allowed disabled:bg-transparent disabled:text-gray-400"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            <span>Last</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default RequestsTable;
