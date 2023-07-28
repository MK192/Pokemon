import { useSelectedId } from "../context/SelectedPokemonContext";
import { StyledPokemonPreview } from "../componentStyles/PokemonPreview.styled";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { SelectedAbility } from "../types/types";

import axios from "axios";

type Props = {
  isSinglePokemon: boolean;
};
const PokemonPreview = ({ isSinglePokemon }: Props) => {
  const { selected } = useSelectedId();

  const {
    isLoading,
    isError,
    error,
    data: selectedPokemon,
  } = useQuery({
    queryKey: ["pokemons", selected],

    refetchOnWindowFocus: false,
    queryFn: () =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${selected}`).then((res) => {
        return res.data;
      }),
  });
  if (isLoading) return "Loading...";

  if (isError && error instanceof Error)
    return "An error has occurred: " + error.message;
  return (
    <StyledPokemonPreview>
      <img src="../public/pokeball.png" alt="pokeball" className="pokeball" />

      <div className="preview-container">
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${selected}.svg`}
          alt={`pokemon - ${selectedPokemon.name}}`}
          className="preview-image"
        />
        <div className="pokemon-preview-name">
          <strong>{selectedPokemon.name}</strong>
          {!isSinglePokemon && (
            <Link to={`pokemon/${selected}`}>
              <img src="preview.png" alt="arrow icon " />
            </Link>
          )}
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
            {selectedPokemon.abilities?.map((pokemon: SelectedAbility) => {
              return (
                <div className="ability" key={pokemon?.ability?.name}>
                  {pokemon?.ability?.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isSinglePokemon && (
        <div className="selected-id">{selectedPokemon.id}</div>
      )}
    </StyledPokemonPreview>
  );
};

export default PokemonPreview;
