import { Character } from "../types.ts";


const CharacterResolver = {
    location : async (parent : Character) => {
        try {
            const response = await fetch(parent.location.url);
            const data = await response.json();
            return data
        } catch (error) {
            throw new Error(error)
        }
    },
    origin : async (parent : Character) => {
        try {
            const response = await fetch(parent.origin.url);
            const data = await response.json();
            return data
        } catch (error) {
            throw new Error(error)
        }
    },
    episode : async (parent : Character) => {
        try {
                const respones = await Promise.all(parent.episode.map(async (episode)=>{
                const data  = await fetch(episode)
                const data2 =  data.json()
                return data2
            })) 
            return respones
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default CharacterResolver