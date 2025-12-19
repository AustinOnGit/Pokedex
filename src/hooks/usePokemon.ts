import { useEffect, useState } from "react"
import { IndexedPokemon, ListPokemon, PokemonListResponse } from "../interfaces/pokemon.interfaces"
import { POKEMON_API_BASE_URL, POKEMON_API_POKEMON_URL, POKEMON_GIF_URL } from "../constants"
import { httpClient } from "../api/httpClient"

const usePokemon = () => {
    const [pokemons, setPokemon] = useState<ListPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)

    useEffect(() =>{
        fetchPokemon()
    }, [])

    const indexedPokemonToListPokemon = (indexedPokemon: IndexedPokemon) =>{
        const pokedexNumber = parseInt(indexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}`, "")
        .replace("/",""))
    
        const listPokemon: ListPokemon = {
            name: indexedPokemon.name,
            url: indexedPokemon.url,
            image: `${POKEMON_GIF_URL}/${pokedexNumber}.png`,
            pokedexNumber
        }

        return listPokemon
    }

    const fetchPokemon = async () => {
        if(nextUrl){
            const result = await httpClient.get<PokemonListResponse>(nextUrl)
            if(result?.data){
                const listPokemons = result.data.results.map(p => indexedPokemonToListPokemon(p))
                setPokemon([...pokemons, ...listPokemons])
                setNextUrl(result.data.next)
            }
            console.log(result)
        }
    }

    return{
        pokemons,
        fetchNextPage: fetchPokemon,
        hasMorePokemon: !!nextUrl
    }
}

export default usePokemon