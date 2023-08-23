import React from 'react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
  onPageChange: (page: number) => void;
  value: number;
};

const Pagination: React.FC<PaginationProps> = ({ onPageChange, value }) => {
  return (
    <>
      <ReactPaginate
        className='paginate__wrapper'
        breakLabel='...'
        nextLabel='>'
        onPageChange={(event) => onPageChange(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel='<'
        renderOnZeroPageCount={null}
        forcePage={value - 1}
      />
    </>
  );
};

export default Pagination;
