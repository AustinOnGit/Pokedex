import { Button, Container } from "@mui/material";
import PokemonList from "../components/PokemonList";
import usePokemon from "../hooks/usePokemon";

const Home = () => {
    const { pokemons, hasMorePokemon, fetchNextPage } = usePokemon();

    return (
        <Container>
            <PokemonList pokemons={pokemons}></PokemonList>
            {hasMorePokemon ? (
                <Button variant="contained" onClick={fetchNextPage}>Load </Button> 
            ) :null}
        </Container>
    );
    
};

export default Home;