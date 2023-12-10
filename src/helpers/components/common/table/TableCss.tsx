///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Design One
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Design One Table
export const defaultThCss = "z-80",
  tableThCss = "h-[52px] px-7 bg-gray-100 text-primary-lighter text-sm text-xs",
  tableTdCss = (isLastRow: boolean) =>
    `${
      isLastRow ? "" : "border-b-[1px] border-primary-lighter/50"
    }  px-8 py-2 z-1 `;

// Design One Pagination
export const containerClassName =
    // "lg:bottom-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-[3rem] flex justify-center items-center text-dark-800 text-xs",
    "h-[52px] flex justify-center items-center text-dark-800 min-w-[25rem]",
  iconCss = "text-sm",
  pageClassName =
    "w-5 h-5 mx-1 flex justify-center items-center rounded-full hover:bg-primary-medium/70 dark:hover:bg-green-800 hover:text-white/80",
  pageLinkClassName = (paginationCount: number) =>
    paginationCount !== 0 ? "p-1" : "p-2",
  activeClassName = (paginationCount: number) =>
    paginationCount !== 0
      ? "rounded-full bg-primary-medium dark:bg-green-700 text-white"
      : "",
  previousClassName = (hidePrevIcon: boolean) =>
    hidePrevIcon
      ? "text-primary-lighter w-5 h-5 flex justify-center items-center rounded-full text-lg"
      : "",
  previousLinkClassName = (currentPage: number, paginationCount: number) =>
    currentPage !== paginationCount ? "" : "",
  nextClassName = (hideNextIcon: boolean) =>
    hideNextIcon
      ? "text-primary-lighter w-5 h-5 flex justify-center items-center rounded-full text-lg"
      : "",
  nextLinkClassName = (currentPage: number, paginationCount: number) =>
    currentPage !== paginationCount ? "" : "";
