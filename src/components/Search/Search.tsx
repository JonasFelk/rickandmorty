import React, { ChangeEvent, FC, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { debounce } from 'lodash'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import { useSelector } from 'react-redux'
import {
  selectorFilter,
  setCurrentPage,
  setDebouncedSearchValue,
  setSearchValue,
} from '../../redux/filter/filterSlice'

import styles from '../Search/Search.module.scss'
import { useAppDispatch } from '../../redux/store'

export const Search: FC = () => {
  const dispatch = useAppDispatch()
  const { searchValue } = useSelector(selectorFilter)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const handleSearchClear = () => {
    inputRef.current?.focus()
    dispatch(setSearchValue(''))
    dispatch(setDebouncedSearchValue(''))
    dispatch(setCurrentPage(0))
  }
  const onClickInput = () => {
    if (inputRef.current) {
      navigate('/characters')
      dispatch(setCurrentPage(0))
    }
  }
  const updateSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(setDebouncedSearchValue(value))
    }, 500),
    []
  )

  const handlerChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value))
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.root}>
      <>
        <BiSearch className={styles.iconSearch} />
        <input
          ref={inputRef}
          onChange={handlerChangeInput}
          onClick={onClickInput}
          value={searchValue}
          type='text'
          placeholder='Search characters...'
        />
        {searchValue && (
          <GrFormClose
            className={styles.iconClear}
            onClick={handleSearchClear}
          />
        )}
      </>
    </div>
  )
}
