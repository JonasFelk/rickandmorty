import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

export interface IPagination {
  pageCount: number
  onChangePage: (page: number) => void
  currentPage: number
}

export const Pagination: FC<IPagination> = ({
  pageCount,
  onChangePage,
  currentPage,
}) => {
  return (
    <ReactPaginate 
      className={styles.root}
      breakLabel='...'
      nextLabel='→'
      onPageChange={(event) => onChangePage(event.selected)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      pageCount={pageCount + 1}
      previousLabel='←'
      renderOnZeroPageCount={() => null}
      forcePage={currentPage}
      // initialPage={currentPage}
    />
  )
}
