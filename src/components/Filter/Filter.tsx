import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import {
  selectorFilter,
  setCurrentPage,
  setGender,
  setSpecies,
  setStatus,
  TGender,
  TSpecies,
  TStatus,
} from '../../redux/filter/filterSlice'
import { useAppDispatch } from '../../redux/store'

import styles from './Filter.module.scss'

const statusList: string[] = ['Alive', 'Dead', 'Unknown']
const speciesList: string[] = [
  'Human',
  'Alien',
  'Humanoid',
  'Poopybutthole',
  'Mythological',
  'Unknown',
  'Animal',
  'Disease',
  'Robot',
  'Cronenberg',
  'Planet',
]
const gendersList: string[] = ['female', 'male', 'genderless', 'unknown']

export const Filter: FC = () => {
  const dispatch = useAppDispatch()
  const { status, species, gender } = useSelector(selectorFilter)

  const onClickStatus = (status: string) => {
    dispatch(setStatus(status as TStatus))
    dispatch(setCurrentPage(0))
  }
  const onClickSpecies = (specie: string) => {
    dispatch(setSpecies(specie as TSpecies))
    dispatch(setCurrentPage(0))
  }
  const onClickGender = (gender: string) => {
    dispatch(setGender(gender as TGender))
    dispatch(setCurrentPage(0))
  }

 const onClickReset = () => {
    onClickStatus('')
    onClickSpecies('')
    onClickGender('')
   dispatch(setCurrentPage(0))
  }
  //Todo можно переделать в 1 компонент
  return (
    <div className={styles.root}>
      <>
        <span>Status</span>
        <ul>
          {statusList.map((item, index) => (
            <li
              key={index}
              className={item === status ? styles.active : ''}
              onClick={() => onClickStatus(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
      <>
        <span>Species</span>
        <ul>
          {speciesList.map((item, index) => (
            <li
              key={index}
              className={item === species ? styles.active : ''}
              onClick={() => onClickSpecies(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
      <>
        <span>Gender</span>
        <ul>
          {gendersList.map((item, index) => (
            <li
              key={index}
              className={item === gender ? styles.active : ''}
              onClick={() => onClickGender(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
      <button onClick={onClickReset}>Reset</button>
    </div>
  )
}
