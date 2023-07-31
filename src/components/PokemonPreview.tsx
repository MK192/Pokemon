import { useState } from "react";
import { useSelectedId } from "../context/SelectedPokemonContext";
import { StyledPokemonPreview } from "../componentStyles/PokemonPreview.styled";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { SelectedAbility } from "../types/types";
import { pokemonCatch } from "../utils/functions";
import { isLocalStorageAccessible } from "../utils/functions";

import axios from "axios";
import PreviewMessage from "./PreviewMessage";

type Props = {
  isSinglePokemon: boolean;
};
const PokemonPreview = ({ isSinglePokemon }: Props) => {
  const { selected } = useSelectedId();
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [catchMessage, setCatchMessage] = useState("");
  let catchedPokemonNumber = null;
  if (isLocalStorageAccessible()) {
    catchedPokemonNumber = JSON.parse(
      localStorage.getItem("pokemonMaster") || "{}"
    );
  }
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

  const animation = () => {
    setIsAnimationActive(true);
    setTimeout(() => {
      setIsAnimationActive(false);
    }, 3000);
  };
  if (isLoading) return "Loading...";

  if (isError && error instanceof Error)
    return "An error has occurred: " + error.message;
  return (
    <StyledPokemonPreview>
      <img
        src="/pokeball.png"
        alt="pokeball"
        className={isAnimationActive ? "pokeball-spining" : "pokeball"}
        onClick={() => {
          pokemonCatch(selected).then((result) => {
            console.log(result);
            setCatchMessage(result);
          });

          animation();
        }}
      />

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
        <PreviewMessage
          catchedPokemonNumber={catchedPokemonNumber?.pokemons.length}
          catchMessage={catchMessage}
        />
      </div>
      {isSinglePokemon && (
        <div className="selected-id">{selectedPokemon.id}</div>
      )}
    </StyledPokemonPreview>
  );
};

export default PokemonPreview;
