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
  // const [episode, setEpisode] = useState<Episode>()
  // const [characters, setCharacters] = useState<Character[]>([])
  // const [selectedEpisodeId, setSelectedEpisodeId] = useState<number | null>(1)
  // const [episodes, setEpisodes] = useState<Episode[]>([])

  const { episode, episodesSidebar, characters, status } =
    useSelector(selectEpisodes)

  // const api = `https://rickandmortyapi.com/api/episode/${selectedEpisodeId}`

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const { data: episodeData } = await axios.get<Episode>(api)
  //       setEpisode(episodeData)
  //       // console.log(episodeData)

  //       const characterResponses = await Promise.all(
  //         episodeData.characters.map((characterUrl) =>
  //           axios.get<Character>(characterUrl)
  //         )
  //       )

  //       // console.log(characterResponses)

  //       const characterData = characterResponses.map(
  //         (response) => response.data
  //       )
  //       setCharacters(characterData)
  //       const { data: episodesData } = await axios.get<{ results: Episode[] }>(
  //         'https://rickandmortyapi.com/api/episode'
  //       )
  //       setEpisodes(episodesData.results)
  //     } catch (error) {
  //       console.log(`df${error}`)
  //     }
  //   }

  //   fetchData()
  // }, [api])

  // useEffect(() => {
  //   async function fetchEpisodes() {
  //     try {
  //       const { data: episodesData } = await axios.get<{ results: Episode[] }>(
  //         'https://rickandmortyapi.com/api/episode'
  //       )
  //       setEpisodes(episodesData.results)
  //     } catch (error) {
  //       console.log(`jib,rf${error}`)
  //     }
  //   }

  //   fetchEpisodes()
  // }, [])
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
  }, [])

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
                  <span>{status === Status.LOADING ? (
                    <SkeletonSidebar />
                  ) : (
                    `Episode: ${episode?.name}`
                  )}
                  </span>
                </div>
                <div>
                  <span>{status === Status.LOADING ? (
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
