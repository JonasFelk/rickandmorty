import React, { FC, useEffect } from 'react'
import { Card, Skeleton, NameSidebar, SkeletonSidebar } from '../../components'

import { fetchLocations, fetchLocationsSidebar, selectorLocations } from '../../redux/asyncLocations'
import { Status } from '../../redux/character/types'
import { useAppDispatch, useAppSelector } from '../../redux/store'

import styles from './Locations.module.scss'

const Locations: FC = () => {
  const { location, residents, locationsSidebar, status } = useAppSelector(selectorLocations)
  const dispatch = useAppDispatch()
  console.log(locationsSidebar);

  const residentsCard = residents.map((obj) => <Card key={obj.id} {...obj} />)
  const skeletons = [...new Array(20)].map((_, index) => (
    <Skeleton key={index} />
  ))

  const skeletonSidebar = [...new Array(40)].map((_, index) => (
    <SkeletonSidebar key={index} />
  ))

  useEffect(() => {
    dispatch(fetchLocations(location.id))
    dispatch(fetchLocationsSidebar())
    window.scrollTo(0, 0)

  }, [dispatch, location.id])

  const handleNameLocation = (id: number) => {
    dispatch(fetchLocations(id))
    window.scrollTo(0, 0)
  }

  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.root}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.info}>
                <NameSidebar name={'Name'} children={location?.name} />
                <NameSidebar name={'Type'} children={location?.type} />
                <NameSidebar name={'Dimension'} children={location?.dimension} />
              </div>
              <ul>
                <span>Locations</span>
                {status === Status.LOADING ? skeletonSidebar : locationsSidebar.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleNameLocation(item.id)}
                    className={location.name === item.name ? styles.active : ''}
                  >
                    {item.name}
                  </li>
                ))}

              </ul>
            </div>
            <div className={styles.items}>
              {status === Status.LOADING ? skeletons : residentsCard}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations
