import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
} from "@heroui/react";

export default function DataTable({ columns, tableData, apiHit }) {
  const [isLoading, setIsLoading] = useState(!apiHit);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (apiHit) {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500);
    } else {
      setIsLoading(true);
      setFadeOut(false);
    }
  }, [apiHit]);

  return (
    <Table
      aria-label="Dynamic Table"
      className={`transition-opacity duration-500 ${fadeOut ? "opacity-100" : "opacity-0"}`}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key} className="text-gray-800 text-base">
            {column.title}
          </TableColumn>
        )}
      </TableHeader>

      {/* Table Body */}
      <TableBody
        items={
          isLoading
            ? Array.from({ length: 10 }, (_, index) => ({ id: `skeleton-${index}` }))
            : tableData
        }
        emptyContent={apiHit && tableData.length === 0 ? "No record found" : null}
      >
        {(item, index) => (
          <TableRow key={item.id || `row-${index}`}>
            {columns.map((column, colIndex) => (
              <TableCell key={column.key || `cell-${colIndex}`}>
                {isLoading ? (
                  <Skeleton
                    className={`h-8 w-full rounded-md bg-gray-300 bdark:bg-gray-700 transition-all duration-500 ${fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
                      }`}
                  />
                ) : column.transform ? (
                  column.transform(item[column.key], item)
                ) : (
                  item[column.key] || "-"
                )}
              </TableCell>
            ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
