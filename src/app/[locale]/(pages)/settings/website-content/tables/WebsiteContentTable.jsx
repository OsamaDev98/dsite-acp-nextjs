"use client";

import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import Image from "next/image";
import { useEffect, useState } from "react";
import Sortable from "sortablejs";

const WebsiteContentTable = ({ tableData }) => {
  const columnHelper = createColumnHelper();
  const [data, setData] = useState(tableData);

  // sortable config
  useEffect(() => {
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
  }, []);

  const columns = [
    columnHelper.accessor("id", {
      header: "",
      cell: (info) => {
        return <span>{info.getValue()}</span>;
      },
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
      header: "Website content",
      cell: (info) => {
        const { image, title } = info.getValue();
        return (
          <div className="flex items-center gap-2">
            {image}
            <span>{title}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor("status", {
      header: "Status",
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
                <td
                  key={cell.id}
                  className={`border-b ${
                    (cell.column.id == "id" || cell.column.id == "sortable") &&
                    "w-14"
                  }`}
                >
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
export default WebsiteContentTable;
