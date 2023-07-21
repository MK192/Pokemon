import { useSelectedId } from '../context/ContextProvider';
import { StyledPokemonPreview } from '../componentStyles/PokemonPreview';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import axios from 'axios';
const PokemonPreview = () => {
  const { selected } = useSelectedId();

  const {
    isLoading,
    error,
    data: selectedPokemon,
  } = useQuery({
    queryKey: ['pokemons', selected],
    cacheTime: 600000,

    queryFn: () =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${selected}`).then((res) => {
        return res.data;
      }),
  });
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;
  return (
    <StyledPokemonPreview>
      <img src="pokeball.png" alt="pokeball" className="pokeball" />

      <div className="preview-container">
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${selected}.svg`}
          alt={`pokemon - ${selectedPokemon.name}}`}
          className="preview-image"
        />
        <div className="pokemon-preview-name">
          <strong>{selectedPokemon.name}</strong>
          <Link to={`pokemon/${selected}`}>
            <img src="preview.png" alt="arrow icon " />
          </Link>
        </div>
        <div className="stats-abilities">
          <hr />
          <div className="preview-stats">
            <ul>
              <li>height: {selectedPokemon.height}</li>
              <li>weight: {selectedPokemon.weight}</li>
              <li>abilites:</li>
            </ul>
          </div>
          <div className="preview-abilities">
            {selectedPokemon.abilities?.map((pokemon) => {
              return (
                <div className="ability" key={pokemon?.ability?.name}>
                  {pokemon?.ability?.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyledPokemonPreview>
  );
};

export default PokemonPreview;
