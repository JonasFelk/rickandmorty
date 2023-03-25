import React, { FC, useEffect } from 'react'

import { Card } from '../../components/Card/Card'

import styles from '../Characters/Characters.module.scss'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../redux/store'
import { selectorFilter, setCurrentPage } from '../../redux/filter/filterSlice'
import {
  selectorCharacterData,
  selectorCharacterInfo,
} from '../../redux/character/selectors'

import { Status } from '../../redux/character/types'
import { fetchCharacters } from '../../redux/asyncActions'

import { Filter, Pagination, Skeleton, CharactersNotFound } from '../../components'


const Characters: FC = () => {
  const dispatch = useAppDispatch()

  const { items, statusLoading } = useSelector(selectorCharacterData)
  const { debouncedSearchValue, status, species, gender, currentPage } =
    useSelector(selectorFilter)
  const { pages } = useSelector(selectorCharacterInfo)

  const page = currentPage ? `&page=${currentPage}` : ''
  const search = debouncedSearchValue ? `&name=${debouncedSearchValue}` : ''
  const sortByStatus = status ? `&status=${status}` : ''
  const sortBySpecies = species ? `&species=${species}` : ''
  const sortByGender = gender ? `&gender=${gender}` : ''

  useEffect(() => {
    dispatch(
      fetchCharacters({
        search,
        sortByStatus,
        sortBySpecies,
        sortByGender,
        page,
      })
    )
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, search, status, species, gender, page])

  const onChangeCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const characters = items.map((obj) => <Card key={obj.id} {...obj} />)
  const skeletons = [...new Array(20)].map((_, index) => (
    <Skeleton key={index} />
  ))

  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.row}>
          <Filter />
          <div className={styles.root}>
            <div className={styles.items}>
              {statusLoading === Status.LOADING ? skeletons : characters}
            </div>
            {pages > 1 && (
              <Pagination
                onChangePage={onChangeCurrentPage}
                pageCount={pages}
                currentPage={currentPage}
              />
            )}
          </div>
          {statusLoading === Status.ERROR ? <CharactersNotFound /> : ''}
        </div>
      </div>
    </section>
  )
}

export default Characters
