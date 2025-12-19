import { useEffect, useState } from "react"
import { IndexedPokemon, PokemonListResponse } from "../interfaces/pokemon.interfaces"
import { POKEMON_API_POKEMON_URL } from "../constants"
import { httpClient } from "../api/httpClient"

const usePokemon = () => {
    const [pokemons, setPokemon] = useState<IndexedPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)

    useEffect(() =>{
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        if(nextUrl){
            const result = await httpClient.get<PokemonListResponse>(nextUrl)
            if(result?.data){
                setPokemon(result.data.results)
            }
            console.log(result)
        }
    }

    return{
        pokemons
    }
}

export default usePokemon