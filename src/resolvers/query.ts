
import { __Directive } from "https://deno.land/x/graphql_deno@v15.0.0/mod.ts";
import { Character } from "../types.ts";

export const Query = {
    test : () => {
        return "fwafafwaa"
    },
    character : async (_: unknown, args : {id : string})  => {
        try {
            
            const response = await fetch(`https://rickandmortyapi.com/api/character/${args.id}`);
            const data = await response.json();
            console.log(data)
            return data


            

        } catch (error) {
            throw new Error(error)
        }
    },
    charactersByIds : async (_: unknown, args : { ids : string[]})   => {
        try {

            const response = await fetch(`https://rickandmortyapi.com/api/character/${args.ids}`);
            const data = await response.json();
            return data


            
        } catch (error) {
            throw new Error(error)
        }
    },
    
};