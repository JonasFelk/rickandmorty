import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import characterSlice from './character/slice'
import filterSlice from './filter/filterSlice'
import singleCharacterSlice from './singleCharacter/slice'
import episodesSlice from './asyncEpisode'
import locationsSlice from './asyncLocations'

export const store = configureStore({
  reducer: {
    characterSlice,
    filterSlice,
    singleCharacterSlice,
    episodesSlice,
    locationsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector