import { Container } from "@mui/material";
import PokemonList from "../components/PokemonList";
import usePokemon from "../hooks/usePokemon";

const Home = () => {
    const { pokemons } = usePokemon();

    return (
        <Container>
            <PokemonList pokemons={pokemons}></PokemonList>
        </Container>
    )
    
};

export default Home;