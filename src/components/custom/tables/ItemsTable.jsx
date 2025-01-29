"use client";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import Image from "next/image";
import Sortable from "sortablejs";
import { useEffect, useState } from "react";
import ActionsBtn from "../buttons/ActionsButton";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const ItemsTable = ({
  sectionName,
  editLink,
  actions,
  isCareer = false,
  isPages = false,
  isRequests = false,
  requestsLink,
  tableData,
}) => {
  const t = useTranslations("ItemsTable");

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      header: "",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("sortable", {
      header: "",
      cell: () => {
        return (
          <div className="sortable_icon flex items-center gap-2">
            <Image
              src="https://dsite.sa/public/assets/acp/img/sort.svg"
              alt="Sortable icon"
              width={14}
              height={19}
              className="cursor-pointer"
            />
          </div>
        );
      },
    }),
    columnHelper.accessor("item", {
      header: t("item"),
      cell: (info) => {
        const { image, title } = info.getValue();
        return (
          <div className="flex gap-4">
            {isCareer ? (
              ""
            ) : isPages ? (
              <Image
                src="https://dsite.sa/public/assets/acp/img/page.svg"
                alt="table image"
                width={30}
                height={30}
              />
            ) : (
              <Image
                src={image}
                alt={title}
                width={110}
                height={80}
                className="rounded-lg"
              />
            )}
            <h2 className="text-lg text-[#707070] font-medium max-w-80 w-full">
              {title}
            </h2>
          </div>
        );
      },
    }),
    columnHelper.accessor("status", {
      header: t("status"),
      cell: (info) => {
        const row = info.row.original;
        return (
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="toggle-checkbox hidden"
              checked={info.getValue()}
              onChange={() =>
                setData((prevData) =>
                  prevData.map((item) =>
                    item.id === row.id
                      ? { ...item, status: !item.status }
                      : item
                  )
                )
              }
            />
            <div
              className={`w-14 h-6 rounded-full shadow-inner flex items-center duration-300 ${
                info.getValue() ? "bg-green-500" : "bg-gray-300"
              } relative cursor-pointer`}
            >
              <div
                className={`w-[18px] h-[18px] bg-white rounded-full shadow transform transition-transform duration-300 ${
                  info.getValue()
                    ? "ltr:translate-x-[34px] rtl:-translate-x-[34px]"
                    : "ltr:translate-x-1 rtl:-translate-x-1"
                }`}
              ></div>
            </div>
          </label>
        );
      },
    }),
    columnHelper.accessor("actions", {
      header: t("actions"),
      cell: (info) => {
        const row = info.row.original;
        return (
          <ActionsBtn
            editTarget={editLink}
            itemId={row.id}
            setData={setData}
            actions={actions}
          />
        );
      },
    }),
  ];

  // Conditionally add an optional column
  if (isRequests) {
    columns.splice(
      3,
      0,
      columnHelper.accessor("requests", {
        header: t("requests"),
        cell: (info) => {
          const requestsValue = info.getValue();
          return (
            <div className="flex items-center justify-center">
              <Link
                href={requestsLink}
                className="text-mainColor-500 font-bold"
              >
                {requestsValue}
              </Link>
            </div>
          );
        },
      })
    );
  }

  const [data, setData] = useState(tableData);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  // sortable config
  useEffect(() => {
    if (typeof window !== "undefined") {
      const elements = document.querySelector("#itemsTable tbody");
      const sortable = new Sortable(elements, {
        handle: ".sortable_icon", // Drag handle selector within list items
        onEnd: function () {
          const rows = document.querySelectorAll("#itemsTable tbody tr");
          rows.forEach((row, index) => {
            const indexCell = row.querySelector("td:first-child");
            indexCell.innerHTML = index + 1; // Update the index based on row position
          });
        },
      });
    }
  }, []);

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
              id={`${sectionName}_table_${row.id}`}
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
          <div className="flex items-center justify-center space-x-2 gap-2">
            {renderPageNumbers().map((page, index) =>
              typeof page === "string" ? (
                <span key={index} className="px-3 py-1 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => table.setPageIndex(page)}
                  className={`px-3 py-1 !mx-0 rounded hover:bg-mainColor-500 hover:text-white ${
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
export default ItemsTable;
