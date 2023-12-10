import { Badge } from "helpers/components/common";
import { defaultThCss, tableTdCss, tableThCss } from "../../TableCss";
import { CommonTableSchema } from "../../TableSchema";
import {
  getDateValue,
  getDiscountValue,
  getTimeValue,
} from "utils/methods/tableMethods";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Table(props: CommonTableSchema) {
  // Props
  const {
    currentTable,
    getTableProps,
    headerGroups,
    handleHeaderClick,
    getTableBodyProps,
    rows,
    prepareRow,
  } = props;

  const renderTableCell = (cell: any, isLastRow: boolean, idx: number) => {
    const header = cell.column.Header.toLowerCase();
    const value = cell.value;
    if (header === "id") {
      return (
        <td className={`${tableTdCss(isLastRow)}`} {...cell.getCellProps()}>
          {idx + 1}
        </td>
      );
    }

    if (header === "status") {
      return (
        <td className={tableTdCss(isLastRow)} {...cell.getCellProps()}>
          <Badge
            css={{}}
            status={value === "Active" ? "success" : "alert"}
            title={value}
          />
        </td>
      );
    }

    if (header === "discount") {
      const editedDiscountValue = getDiscountValue(
        cell.row.original.discount_value,
        cell.row.original.discount_type
      );

      return (
        <td className={tableTdCss(isLastRow)} {...cell.getCellProps()}>
          {editedDiscountValue}
        </td>
      );
    }

    if (header === "time") {
      const editedTimeValue = getTimeValue(
        cell.row.original.start_time,
        cell.row.original.end_time
      );

      return (
        <td className={tableTdCss(isLastRow)} {...cell.getCellProps()}>
          {editedTimeValue}
        </td>
      );
    }
    if (header === "date") {
      const editedDateValue = getDateValue(
        cell.row.original.start_date,
        cell.row.original.end_date
      );

      return (
        <td className={tableTdCss(isLastRow)} {...cell.getCellProps()}>
          {editedDateValue}
        </td>
      );
    }

    // For other columns
    return (
      <td className={tableTdCss(isLastRow)} {...cell.getCellProps()}>
        {cell.render("Cell")}
      </td>
    );
  };

  return (
    <div className="w-full flex-1 max-h-[calc(100vh-60px-276px)] min-w-[25rem] scrollbar scrollbar-mt-52px overflow-y-scroll ">
      <table
        ref={currentTable}
        className="w-full table-fixed"
        {...getTableProps()}
      >
        <thead className="sticky text-left top-0 w-full bg-secondary-300 text-secondary-600">
          {headerGroups.map((headerGroup: any) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => {
                  const isId = column.Header === "Id";
                  return column.hideHeader === false ? null : (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={`${
                        column.isSorted
                          ? column.isSortedDesc
                            ? "sort-desc p-7"
                            : "sort-asc p-7"
                          : tableThCss
                      } ${defaultThCss}`}
                      onClick={() => handleHeaderClick(column)}
                    >
                      {isId ? "ID" : column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {/* {rows.map((row, i:number) => { */}
          {rows.map((row: any, idx: number) => {
            prepareRow(row);
            const isLastRow = idx === rows.length - 1;
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) =>
                  renderTableCell(cell, isLastRow, idx)
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
