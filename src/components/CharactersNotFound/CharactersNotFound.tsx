import React, { FC } from 'react'

import styles from './CharactersNotFound.module.scss'
import rickAndMorty from '../../assets/img/rick-and-morty-crying.gif'

export const CharactersNotFound: FC = () => {
 
  return (
    <div className={styles.root}>
      <img src={rickAndMorty} alt="RickAndMorty" />
      <span>Nothing found</span>
      <p>Unfortunately, the symbols for this request were not found.</p>
    </div>
  )
}
