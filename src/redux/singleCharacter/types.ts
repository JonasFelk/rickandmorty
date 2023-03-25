import { Episode } from "../asyncEpisode"
import { Status, TCharacter } from "../character/types"

export interface ISingleCharacter {
  singleCharacter: TCharacter
  statusLoading: Status
  episode: Episode[]
}

