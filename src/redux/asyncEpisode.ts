import { ICharacters } from './../components/Card/Card'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import { RootState } from './store'
import { Status } from './character/types'

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
}

interface EpisodesState {
  episode: Episode
  status: Status
  error: string | null
  characters: ICharacters[]
  episodesSidebar: Episode[]
}

const initialState: EpisodesState = {
  episode: { id: 1, name: '', air_date: '', episode: '', characters: [] },
  status: Status.LOADING,
  error: null,
  characters: [],
  episodesSidebar: [],
}

interface FetchEpisodeResponse {
  episode: Episode
  characters: ICharacters[]
}

export const fetchEpisode = createAsyncThunk<FetchEpisodeResponse, number>(
  'episode/fetchEpisode',
  async (id) => {
    const { data: episode } = await axios.get<Episode>(
      `https://rickandmortyapi.com/api/episode/${id}`
    )

    const characterResponses = await axios.all(
      episode.characters.map((characterUrl) =>
        axios.get<ICharacters>(characterUrl)
      )
    )

    const characters = characterResponses.map((response) => response.data)

    return { episode, characters }
  }
)

export const fetchEpisodesSidebar = createAsyncThunk<Episode[]>(
  'episodes/fetchEpisodesSidebar',
  async () => {
    const { data } = await axios.get<{
      info: { pages: number }
    }>('https://rickandmortyapi.com/api/episode/')
    const totalPages = data.info.pages


    const pagePromises: Promise<AxiosResponse<{ results: Episode[] }>>[] = []
    
    
    for (let i = 1; i <= totalPages; i++) {
      pagePromises.push(
        axios.get<{ results: Episode[] }>(
          `https://rickandmortyapi.com/api/episode/?page=${i}`
        )
      )
    }
console.log(pagePromises)
    const responses = await axios.all(pagePromises)
    console.log(responses)
    const episodes = responses.reduce(
      (acc: Episode[], response) => [...acc, ...response.data.results],
      []
    )

    return episodes
  }
)

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEpisode.pending, (state) => {
      state.status = Status.LOADING
      state.error = null
      
    })
    builder.addCase(fetchEpisode.fulfilled, (state, action) => {
      state.status = Status.SUCCESS
      state.episode = action.payload.episode
      state.characters = action.payload.characters
      
    })
    builder.addCase(fetchEpisode.rejected, (state, action) => {
      state.status = Status.ERROR
      state.error = action.error.message ?? 'Failed to fetch episodes'
    })
    builder.addCase(fetchEpisodesSidebar.fulfilled, (state, action) => {
      // state.status = Status.LOADING
      state.episodesSidebar = action.payload
    })
    
  },
})

export const selectEpisodes = (state: RootState) => state.episodesSlice

export default episodesSlice.reducer
