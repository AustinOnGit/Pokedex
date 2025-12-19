import { Grid } from "@mui/material";
import { IndexedPokemon } from "../interfaces/pokemon.interfaces";
import PokemonCard from "./PokemonCard";

interface PokedexListProps{
   pokemons: IndexedPokemon[]; 
}

const PokemonList = ({ pokemons }: PokedexListProps) =>{
    return (
        <Grid>{
        pokemons.length > 0? pokemons.map((p) => {
            return(
                <Grid>
                    <PokemonCard key={p.name} pokemon={p}/>
                </Grid>
            ) 
        })
        :null}
        </Grid>
    );
};

export default PokemonList;