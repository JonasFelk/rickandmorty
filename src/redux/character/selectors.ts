import { RootState } from "../store";

export const selectorCharacterData = (state: RootState) => state.characterSlice
export const selectorCharacterInfo = (state: RootState) => state.characterSlice.info
