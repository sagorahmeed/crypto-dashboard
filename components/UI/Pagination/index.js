/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classnames from "classnames";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { DOTS, usePagination } from "../../../hooks/usePagination";
import DoubleArrow from "../../../public/images/icons/DoubleArrow";
// import './pagination.scss';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
  lastPage
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    lastPage
  });

  // if (currentPage === 0 || paginationRange.length < 2) {
  //   return null;
  // }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const onStart = () => {
    onPageChange(1);
  };
  // let lastPage = paginationRange[paginationRange.length - 1];

  const onEnd = () => {
    onPageChange(lastPage);
    
  };

  return (
    <ul className={classnames("flex list-none", { [className]: className })}>
      <li
        className={classnames(
          "mr-3 w-9 h-9 flex items-center justify-center text-sm text-gray bg-snow rounded cursor-pointer",
          {
            hidden: currentPage === 1,
          }
        )}
        onClick={onStart}
      >
        <DoubleArrow className="w-5 h-5 text-gray rotate-180" />
      </li>
      <li
        className={classnames(
          "mr-3 w-9 h-9 flex items-center justify-center text-sm text-gray bg-snow rounded cursor-pointer",
          {
            "pointer-events-none": currentPage === 1,
          }
        )}
        onClick={onPrevious}
      >
        <MdChevronLeft className="w-5 h-5 text-gray" />
      </li>
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className="w-9 h-9 flex items-center justify-center text-sm text-gray rounded cursor-default bg-transparent">
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames(
              "mr-3 w-9 h-9 flex items-center justify-center text-sm bg-snow rounded cursor-pointer",
              { "text-green": pageNumber === currentPage },
              { "text-gray": !(pageNumber === currentPage) }
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(
          "mr-3 w-9 h-9 flex items-center justify-center text-sm text-gray bg-snow rounded cursor-pointer",
          {
            "pointer-events-none": currentPage === lastPage,
          }
        )}
        onClick={onNext}
      >
        <MdChevronRight className="w-5 h-5 text-gray" />
      </li>
      <li
        className={classnames(
          "w-9 h-9 flex items-center justify-center text-sm text-gray bg-snow rounded cursor-pointer",
          {
            hidden: currentPage === lastPage,
          }
        )}
        onClick={onEnd}
      >
        <DoubleArrow className="w-5 h-5 text-gray" />
      </li>
    </ul>
  );
};

export default Pagination;
