"use client";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { useTranslations } from "next-intl";

const AdminsTable = ({ tableData }) => {
  const t = useTranslations("Admins");

  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("id", {
      header: "",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("item", {
      header: t("name"),
      cell: (info) => {
        const { image, title } = info.getValue();
        return (
          <div className="flex items-center gap-4">
            <Image
              src={image}
              alt={title}
              width="40"
              height="40"
              priority
              className="rounded-full"
            />
            <p>{title}</p>
          </div>
        );
      },
    }),
    columnHelper.accessor("email", {
      header: t("email"),
      cell: (info) => {
        return (
          <Link
            href={`mailto:${info.getValue()}`}
            className="text-mainColor-500"
          >
            {info.getValue()}
          </Link>
        );
      },
    }),
    columnHelper.accessor("status", {
      header: t("status"),
      cell: (info) => {
        return <span>{info.getValue()}</span>;
      },
    }),
    columnHelper.accessor("actions", {
      header: t("actions"),
      cell: (info) => {
        return <span>-</span>;
      },
    }),
  ];

  const [data, setData] = useState(tableData);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="scroll-container w-full overflow-x-auto grid">
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
export default AdminsTable;
