/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useRef, useState } from "react";
import { useRef } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import Table from "./table/Table";
import { CommonDesignSchema } from "../TableSchema";
import Pagination from "./control/Pagination";

export default function DesignOne(props: CommonDesignSchema) {
  // Props
  const { columns, data } = props;

  // Ref
  const currentTable = useRef<HTMLTableElement | null>(null);

  // States
  // const [filterInput, setFilterInput] = useState("");
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleFilterChange = (e: any) => {
  //   const value = e.target.value || undefined;
  //   setFilter("show.name", value);
  //   setFilterInput(value);
  // };

  // Actions
  const handleHeaderClick = (column: any) => {
    alert(column.Header);
  };

  // Handle page count
  const handlePageClick = () => {};

  // Table props
  const tableProps = {
    currentTable,
    getTableProps,
    headerGroups,
    handleHeaderClick,
    getTableBodyProps,
    rows,
    prepareRow,
  };

  // Pagination props
  const paginateProps = {
    // isLoading,
    currentPage: 0,
    paginationCount: 10,
    handlePageClick,
    css: {},
  };

  // Render the UI for your table
  return (
    <div className="w-full h-full flex flex-col text-[10px] ">
      <Table {...tableProps} />
      <Pagination {...paginateProps} />
    </div>
  );
}
