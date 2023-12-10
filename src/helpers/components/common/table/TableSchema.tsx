/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { CommonSchema, FlagSchema } from "utils/schemas/GlobalSchema";

export type CommonPopups = {
  addPopup1?: ReactNode;
  editPopup1?: ReactNode;
};

export type CommonTableSchema = {
  currentTable: any;
  getTableProps: any;
  headerGroups: any;
  handleHeaderClick: any;
  getTableBodyProps: any;
  rows: any;
  prepareRow: any;
};

export interface CommonDesignSchema extends FlagSchema {
  columns: any;
  data: any;
}

export interface CommonPaginationSchema extends CommonSchema {
  // paginateKey: string;
  currentPage: number;
  paginationCount: number;
  isLoading?: boolean;
  handlePageClick: any;
}
