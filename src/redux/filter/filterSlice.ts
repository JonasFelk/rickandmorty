import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type TStatus = '' | 'alive' | 'dead' | 'unknown'
export type TSpecies =
  | ''
  | 'Human'
  | 'Alien'
  | 'Humanoid'
  | 'Poopybutthole'
  | 'Mythological'
  | 'Unknown'
  | 'Animal'
  | 'Disease'
  | 'Robot'
  | 'Cronenberg'
  | 'Planet'

export type TGender = '' | 'female' | 'male' | 'genderless' | 'unknown'

interface IFilterSlice {
  searchValue: string
  debouncedSearchValue: string
  status: TStatus
  species: TSpecies
  gender: TGender
  currentPage: number
}

const initialState: IFilterSlice = {
  searchValue: '',
  debouncedSearchValue: '',
  status: '',
  species: '',
  gender: '',
  currentPage: 0,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setDebouncedSearchValue(state, action: PayloadAction<string>) {
      state.debouncedSearchValue = action.payload
    },
    setStatus(state, action: PayloadAction<TStatus>) {
      state.status = action.payload
    },
    setSpecies(state, action: PayloadAction<TSpecies>) {
      state.species = action.payload
    },
    setGender(state, action: PayloadAction<TGender>) {
      state.gender = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    //!сделать reset
  },
})

export const selectorFilter = (state: RootState) => state.filterSlice

export const {
  setSearchValue,
  setDebouncedSearchValue,
  setStatus,
  setSpecies,
  setGender,
  setCurrentPage,
} = filterSlice.actions
export default filterSlice.reducer
