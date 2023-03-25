import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BaseResponse, TFetchCharactersArg } from './character/types'


export const fetchCharacters = createAsyncThunk<
  BaseResponse,
  TFetchCharactersArg
>(
  'characters/fetchCharactersStatus',
  async ({ search, sortByStatus, sortBySpecies, sortByGender, page }) => {
    const { data } = await axios.get<BaseResponse>(
      `https://rickandmortyapi.com/api/character?${page}${search}${sortByStatus}${sortBySpecies}${sortByGender}`
    )

    return data
  }
)


