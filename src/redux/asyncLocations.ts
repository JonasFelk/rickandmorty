import { RootState } from './store'
import { Status } from './character/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios'
import { ICharacters } from '../components/Card/Card'

type TInfo = {
  count: number
  pages: number
}

interface ILocation {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
}

interface FetchLocationsResponse {
  location: ILocation,
  residents: ICharacters[]
}

export const fetchLocations = createAsyncThunk<FetchLocationsResponse, number>(
  'location/fetchLocations',
  async (id) => {
    const { data: location } = await axios.get<ILocation>(
      `https://rickandmortyapi.com/api/location/${id}`
    )

    const residentsResponses = await axios.all(
      location.residents.map((residentsUrl) =>
        axios.get<ICharacters>(residentsUrl)
      )
    )

    const residents = residentsResponses.map((response) => response.data)

    return {location, residents}
  }
)

export const fetchLocationsSidebar = createAsyncThunk<ILocation[]>(
  'location/fetchLocationsSidebar',
  async () => {
    const { data } = await axios.get<{
      info: { pages: number }
    }>('https://rickandmortyapi.com/api/location/')
    const totalPages = data.info.pages
    console.log(totalPages);
    

    const pagePromises: Promise<AxiosResponse<{ results:  ILocation[]}>>[] = []
    
    
    for (let i = 1; i <= totalPages; i++) {
      pagePromises.push(
        axios.get<{ results: ILocation[] }>(
          `https://rickandmortyapi.com/api/location/?page=${i}`
        )
      )
    }

    const responses = await axios.all(pagePromises)
    const locations = responses.reduce(
      (acc: ILocation[], response) => [...acc, ...response.data.results],
      []
    )

    return locations
  }
)

interface ILocationSlice {
  location: ILocation
  residents: ICharacters[]
  status: Status
  locationsSidebar: ILocation[]
}

const initialState: ILocationSlice = {
  location: { id: 1, name: '', type: '', dimension: '', residents: [] },
  residents: [],
  status: Status.LOADING,
  locationsSidebar: []
}

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.status = Status.LOADING
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.location = action.payload.location
        state.residents = action.payload.residents
        state.status = Status.SUCCESS
        console.log(state.residents)
      })
      .addCase(fetchLocations.rejected, (state) => {
        state.status = Status.ERROR
      })
      .addCase(fetchLocationsSidebar.fulfilled, (state, action) => {
        state.locationsSidebar = action.payload
        state.status = Status.SUCCESS
      })
  },
})

export const selectorLocations = (state: RootState) => state.locationsSlice

export const {} = locationsSlice.actions
export default locationsSlice.reducer
