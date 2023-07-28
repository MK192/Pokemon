import { StyledPokemonLoading } from "../componentStyles/PokemonLoading.styled";

const PokemonLoading = () => {
  return (
    <StyledPokemonLoading>
      <div className="filter-loading">Filter list is loading</div>
      <hr />
      <div className="loading-message">Searching for pokemons...</div>

      <div className="total-pokemons-loading">Total pokemons: ...</div>
      <hr />
    </StyledPokemonLoading>
  );
};

export default PokemonLoading;
