import ReactPaginate from "react-paginate";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CommonPaginationSchema } from "../../TableSchema";
import {
  containerClassName,
  pageClassName,
  activeClassName,
  pageLinkClassName,
  previousClassName,
  previousLinkClassName,
  nextClassName,
  nextLinkClassName,
  iconCss,
} from "../../TableCss";

export default function Pagination(props: CommonPaginationSchema) {
  // Props
  const { isLoading, currentPage, paginationCount, handlePageClick } = props;

  // Variables
  const hidePrevIcon = currentPage > 1 && currentPage !== 0;
  const hideNextIcon = currentPage <= paginationCount - 1 && currentPage !== 0;

  // Icons
  const prevLabel = !hidePrevIcon && <BiChevronLeft className={iconCss} />;
  const nextLabel = !hideNextIcon && <BiChevronRight className={iconCss} />;

  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className={containerClassName}>
          <ReactPaginate
            // key={paginateKey}
            forcePage={currentPage > 1 ? currentPage - 1 : 0}
            pageCount={paginationCount <= 1 ? 1 : paginationCount}
            previousLabel={prevLabel}
            nextLabel={nextLabel}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            renderOnZeroPageCount={null}
            pageClassName={pageClassName}
            containerClassName={containerClassName}
            activeClassName={activeClassName(paginationCount)}
            pageLinkClassName={pageLinkClassName(paginationCount)}
            previousClassName={previousClassName(hidePrevIcon)}
            previousLinkClassName={previousLinkClassName(
              currentPage,
              paginationCount
            )}
            nextClassName={nextClassName(hideNextIcon)}
            nextLinkClassName={nextLinkClassName(currentPage, paginationCount)}
          />
        </div>
      )}
    </>
  );
}
