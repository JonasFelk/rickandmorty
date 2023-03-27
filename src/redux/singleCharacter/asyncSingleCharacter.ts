import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Episode } from "../asyncEpisode"
import { TCharacter } from "../character/types"

interface FetchSingleCharacterResponse {
  singleCharacter: TCharacter
  episode: Episode[]
}

export const fetchSingleCharacter = createAsyncThunk<
  FetchSingleCharacterResponse,
  number
>('character/fetchCharacterStatus', async (id) => {
  const { data: singleCharacter } = await axios.get<TCharacter>(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  const characterResponses = await axios.all(
    singleCharacter.episode.map((characterUrl) => axios.get<Episode>(characterUrl))
  )

  const episode = characterResponses.map((response) => response.data)

  return {singleCharacter, episode }
})
