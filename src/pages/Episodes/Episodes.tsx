import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Card, Skeleton, SkeletonSidebar } from '../../components'

import {
  fetchEpisode,
  fetchEpisodesSidebar,
  selectEpisodes,
} from '../../redux/asyncEpisode'
import { Status } from '../../redux/character/types'
import { useAppDispatch } from '../../redux/store'
import styles from './Episode.module.scss'

const Episodes: FC = () => {
  const { episode, episodesSidebar, characters, status } =
    useSelector(selectEpisodes)

  const dispatch = useAppDispatch()

  const charactersCard = characters.map((obj) => <Card key={obj.id} {...obj} />)
  const skeletons = [...new Array(20)].map((_, index) => (
    <Skeleton key={index} />
  ))

  const skeletonSidebar = [...new Array(40)].map((_, index) => (
    <SkeletonSidebar key={index} />
  ))

  useEffect(() => {
    dispatch(fetchEpisodesSidebar())
    dispatch(fetchEpisode(episode.id))
    window.scrollTo(0, 0)
  }, [dispatch, episode.id])

  const handleNameEpisode = (id: number) => {
    dispatch(fetchEpisode(id))
    window.scrollTo(0, 0)
  }

  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.root}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.info}>
                <div>
                  <span>
                    {status === Status.LOADING ? (
                      <SkeletonSidebar />
                    ) : (
                      `Name: ${episode?.name}`
                    )}
                  </span>
                </div>
                <div>
                  <span>
                    {status === Status.LOADING ? (
                      <SkeletonSidebar />
                    ) : (
                      `Episode: ${episode?.name}`
                    )}
                  </span>
                </div>
                <div>
                  <span>
                    {status === Status.LOADING ? (
                      <SkeletonSidebar />
                    ) : (
                      `Data: ${episode?.air_date}`
                    )}
                  </span>
                </div>
              </div>
              <ul>
                <div className={styles.title}>Episodes</div>
                {status === Status.LOADING
                  ? skeletonSidebar
                  : episodesSidebar.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => handleNameEpisode(item.id)}
                        className={
                          episode.name === item.name ? styles.active : ''
                        }
                      >
                        {item.name}
                      </li>
                    ))}
              </ul>
            </div>
            <div className={styles.items}>
              {status === Status.LOADING ? skeletons : charactersCard}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Episodes
