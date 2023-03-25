import { createSlice } from '@reduxjs/toolkit'
import { fetchCharacters } from '../asyncActions'
import { ICharacterSlice, Status } from './types'

const initialState: ICharacterSlice = {
  items: [],
  statusLoading: Status.LOADING,
  info: {
    count: 0,
    pages: 0,
  },
}

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.statusLoading = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.items = action.payload.results
      state.info.pages = action.payload.info.pages
      state.statusLoading = Status.SUCCESS
    })
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.statusLoading = Status.ERROR
      state.items = []
      state.info.pages = 0
    })
  },
})

// eslint-disable-next-line no-empty-pattern
export const {} = characterSlice.actions
export default characterSlice.reducer
