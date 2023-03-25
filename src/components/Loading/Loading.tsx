import React, { FC } from 'react'

import pickleRick from '../../assets/img/pickle-rick.png'

import styles from './Loading.module.scss'

export const Loading: FC = () => {

  return (
    <div className={styles.root}>
      <img src={pickleRick} alt='' className={styles.imgLoading} />
      <p>Loading...</p>
    </div>
  )
}
