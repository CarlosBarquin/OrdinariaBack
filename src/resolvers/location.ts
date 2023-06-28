import { Character } from "../types.ts";
import { Location  } from "../types.ts";
const LocationResolver = {
  residents : async (parent : Location) => {
    try {
        const respones = await Promise.all(parent.residents.map(async (res)=>{
            const data  = await fetch(res)
            return data.json()
        
        })) 
        return respones
    } catch (error) {
        throw new Error(error)
    }
  }
}

export default LocationResolver