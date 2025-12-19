import { Grid } from "@mui/material";
import { IndexedPokemon, ListPokemon } from "../interfaces/pokemon.interfaces";
import PokemonCard from "./PokemonCard";

interface PokedexListProps{
   pokemons: ListPokemon[]; 
}

const PokemonList = ({ pokemons }: PokedexListProps) =>{
    return (
        <Grid container spacing={3}>{
        pokemons.length > 0? pokemons.map((p) => {
            return(
                <Grid size ={{xs: 3}}>
                    <PokemonCard key={p.name} pokemon={p}/>
                </Grid>
            ) 
        })
        :null}
        </Grid>
    );
};

export default PokemonList;