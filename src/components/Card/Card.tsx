import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { TLocation, TOrigin } from '../../redux/character/types'

import styles from '../Card/Card.module.scss'

export interface ICharacters {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: TOrigin
  location: TLocation
  image: string
  episode: string[]
  url: string
  created: string
}

export const Card: FC<ICharacters> = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
}) => {
  const setStatus = (status: string) => {
    if (status === 'Dead') return styles.dead
    if (status === 'Alive') return styles.alive

    return styles.status
  }

  const shortTitle = (item: string) => {
    return item.length > 20 ? item.substring(0, 15) + '...' : item
  }
  return (
    <article>
      <Link to={`/characters/${id}/${name}`}>
        <div className={styles.root}>
          <img className={styles.img} src={image} alt={image} />
          <span className={setStatus(status)}>{status}</span>
          <div className={styles.inner}>
            <div className={styles.title}>{shortTitle(name)}</div>
            <div className={styles.location}>
              Last known location: <span>{shortTitle(location.name)}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
