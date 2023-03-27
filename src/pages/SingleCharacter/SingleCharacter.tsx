import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { CharactersNotFound, Loading, SingleCard } from '../../components'

import { fetchSingleCharacter } from '../../redux/singleCharacter/asyncSingleCharacter'
import { Status } from '../../redux/character/types'
import { selectorSingleCharacter } from '../../redux/singleCharacter/selectors'
import { useAppDispatch } from '../../redux/store'

import styles from './SingleCharacter.module.scss'

const SingleCharacter: FC = () => {
  const dispatch = useAppDispatch()
  const { singleCharacter, statusLoading } = useSelector(
    selectorSingleCharacter
  )
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchSingleCharacter(Number(id)))
    window.scrollTo(0, 0)
  }, [dispatch, id])

  const error = <CharactersNotFound />
  const loading =
    statusLoading === Status.LOADING ? (
      <Loading />
    ) : (
      <SingleCard singleCharacter={singleCharacter} />
    )

  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.root}>
          {statusLoading === Status.ERROR ? error : loading}
        </div>
      </div>
    </section>
  )
}

export default SingleCharacter
