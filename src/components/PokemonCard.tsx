import { useEffect } from 'react';
import { StyledPokemonCard } from '../componentStyles/PokemonCard.styled';
const PokemonCard = ({ pokemon, isLoading, error }) => {
  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <StyledPokemonCard>
      <div className="pokemon-card">
        <img src={pokemon.sprites.front_default} />
        <p className="pokemon-name">{pokemon.name}</p>
        <span className="pokemon-id">{pokemon.id}</span>
      </div>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
