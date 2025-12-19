import { Card } from "@mui/material";
import { IndexedPokemon } from "../interfaces/pokemon.interfaces";

interface PokemonCardProps {
    pokemon: IndexedPokemon
}

const PokemonCard = ({pokemon}: PokemonCardProps) => {
    return <Card>{pokemon.name}</Card>
}

export default PokemonCard;