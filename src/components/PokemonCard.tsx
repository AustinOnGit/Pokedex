import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { IndexedPokemon, ListPokemon } from "../interfaces/pokemon.interfaces";
import { useEffect, useState } from "react";
import { getColorFromUrl } from "../utils/colors";

interface PokemonCardProps {
    pokemon: ListPokemon
}

const PokemonCard = ({pokemon}: PokemonCardProps) => {
    const [pokemonColor, setPokemonColor] = useState<string | null>(null);

    const getPokemonColor = async() => {
        const color = await getColorFromUrl(pokemon.image);
        if (color) setPokemonColor(color);
    };

    useEffect(() => {
        getPokemonColor();
    },[])

    return (
    <Card sx={{backgroundColor: pokemonColor}}>
        <CardActionArea>
            <Box sx ={{display: "flex", justifyContent: "center", padding: 1}}>
                    <Typography sx={{textTransform: "capitalize"}}>#{pokemon.pokedexNumber}</Typography>
            </Box>
            <CardMedia
            component ="img"
            image ={pokemon.image}
            title = {pokemon.name}
            sx={{height: 100, objectFit: "contain"}}    
            />
            <CardContent>
                <Box sx ={{display: "flex", justifyContent: "center"}}>
                    <Typography sx={{textTransform: "capitalize"}}>{pokemon.name}</Typography>
                </Box>
            </CardContent>
        </CardActionArea>

    </Card>
    );
}

export default PokemonCard;