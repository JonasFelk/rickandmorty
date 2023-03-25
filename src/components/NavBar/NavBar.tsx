import React, { FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { GrFavorite } from 'react-icons/gr'
import { FaMehBlank, FaRegMehBlank } from 'react-icons/fa'

import styles from '../NavBar/NavBar.module.scss'
import { useAppDispatch } from '../../redux/store'
import { setCurrentPage } from '../../redux/filter/filterSlice'

export const NavBar: FC = () => {
  const dispatch = useAppDispatch()
  const [theme, setTheme] = useState(false)

  const handleResetCurrentPage = () => {
    dispatch(setCurrentPage(0))
  }

  const setActive = ({ isActive }: { isActive: Boolean }) => ({
    color: isActive ? 'var(--main-active)' : '',
  })
  return (
    <div className={styles.root}>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              style={setActive}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleResetCurrentPage}
              to='characters'
              style={setActive}
            >
              CHARACTERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/episodes'
              style={setActive}
            >
              EPISODES
            </NavLink>
          </li>
            <li>
            <NavLink
              to='/locations'
              style={setActive}
            >
              LOCATIONS
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.box}>
        <div className={styles.theme} onClick={() => setTheme(!theme)}>
          {theme ? <FaRegMehBlank /> : <FaMehBlank />}
        </div>
        <Link to={'/favorite'} className={styles.favorite}>
          <GrFavorite />
        </Link>
      </div>
    </div>
  )
}
