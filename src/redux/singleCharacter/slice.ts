import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../character/types'
import { fetchSingleCharacter } from './asyncSingleCharacter'
import { ISingleCharacter} from './types'


const initialState: ISingleCharacter = {
  singleCharacter: {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  },
  statusLoading: Status.LOADING,
  episode: [],
}

const singleCharacterSlice = createSlice({
  name: 'singleCharacter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCharacter.pending, (state) => {
      state.statusLoading = Status.LOADING
    })
    builder.addCase(fetchSingleCharacter.fulfilled, (state, action) => {
      state.statusLoading = Status.SUCCESS
      state.singleCharacter = action.payload.singleCharacter
      state.episode = action.payload.episode
    })
    builder.addCase(fetchSingleCharacter.rejected, (state) => {
      state.statusLoading = Status.ERROR
    })
  },
})

// eslint-disable-next-line no-empty-pattern
export const {} = singleCharacterSlice.actions
export default singleCharacterSlice.reducer
