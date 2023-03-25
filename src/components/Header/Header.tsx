import React, { FC } from 'react'

import { Logo, NavBar, Search } from '../../components'

import styles from '../Header/Header.module.scss'

export const Header: FC = () => {
  return (
    <div className={styles.root}>
      <Logo />
      <Search />
      <NavBar />
    </div>
  )
}
