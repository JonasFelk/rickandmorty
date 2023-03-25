import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { TCharacter } from '../../redux/character/types'
import { selectorSingleCharacter } from '../../redux/singleCharacter/selectors'
import { useAppSelector } from '../../redux/store'

import styles from './SingleCard.module.scss'

interface ISingleCharacter {
  singleCharacter: TCharacter
}

export const SingleCard: FC<ISingleCharacter> = ({ singleCharacter }) => {
  const { episode } = useAppSelector(selectorSingleCharacter)
  const navigate = useNavigate()
  return (
    <div className={styles.root}>
      <div className={styles.imgBlock}>
        <img src={singleCharacter.image} alt={singleCharacter.name} />
        <button onClick={() => navigate(-1)} className={styles.goBack}>
          Go back
        </button>
      </div>
      <div className={styles.body}>
        <h1 className={styles.title}>{singleCharacter.name}</h1>
        <ul>
          <li>
            Status: <span>{singleCharacter.status}</span>
          </li>
          <li>
            Gender: <span>{singleCharacter.gender}</span>
          </li>
          <li>
            Species: <span>{singleCharacter.species}</span>
          </li>
          {singleCharacter.type && (
            <li>
              Type: <span>{singleCharacter.type}</span>
            </li>
          )}
          <li>
            Origin: <span>{singleCharacter.origin.name}</span>
          </li>
          <li>
            Last known location: <span>{singleCharacter.location.name}</span>
            <button onClick={() => navigate('/locations')}>View all</button>
          </li>
          <li>
            Episodes:
            <span className={styles.episode}>{singleCharacter.episode.length}</span>
            <button onClick={() => navigate('/episodes')}>View all</button>
          </li>
        </ul>
        <ul className={styles.column}>
          {episode.map((item) => (
            <li key={item.id}>
              <p>episode {item.id}:</p>  {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
