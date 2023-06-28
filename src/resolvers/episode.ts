import { Character } from "../types.ts";
import { Location  } from "../types.ts";
import { Episode } from "../types.ts";


const EpisodeResolver = {
  characters : async (parent : Episode) => {
    try {
        const respones = await Promise.all(parent.characters.map(async (res)=>{
            const data  = await fetch(res)
            const data2 = data.json()
            return data2
        })) 
        return respones
    } catch (error) {
        throw new Error(error)
    }
  }
}

export default EpisodeResolver