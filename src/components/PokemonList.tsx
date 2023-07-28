import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { StyledPokemonList } from "../componentStyles/PokemonList.styled";
import { format } from "date-fns";
import { PokemonResult } from "../types/types";

import axios from "axios";
import PokemonCard from "./PokemonCard";
import PokemonPreview from "./PokemonPreview";
import PokemonLoading from "./PokemonLoading";
import PokemonError from "./PokemonError";
import Nav from "./Nav";
const PokemonList = () => {
  const [page, setPage] = useState<number>(0);
  const [offset, setOFfset] = useState<number>(0);

  const {
    isLoading,
    isError,
    error,
    data: pokemons,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ["pokemons", { offset }],
    keepPreviousData: true,
    refetchOnWindowFocus: false,

    queryFn: () =>
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/?limit=8&offset=${offset}`)
        .then((res) => {
          return res.data;
        }),
  });

  const ids = pokemons?.results?.map((pokemon: PokemonResult) => {
    const idMatch = pokemon?.url.match(/\/(\d+)\/$/);
    const id = idMatch ? Number(idMatch[1]) : null;

    return id;
  });
  const currentDate = format(dataUpdatedAt, "dd MMM yy, H:mm");
  if (isLoading)
    return (
      <>
        <Nav backButtonEnabled={false} navText="Pokemon App" />
        <PokemonLoading />
      </>
    );
  if (isError)
    return (
      <>
        <Nav backButtonEnabled={false} navText="Pokemon App" />
        <PokemonError offset={offset} />;
      </>
    );
  return (
    <>
      <Nav backButtonEnabled={false} navText="Pokemon App" />
      <StyledPokemonList>
        <div className="filter">
          <span>Filter by color: </span>
          <select name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <hr />

        <div className="pokemon-content">
          <div className="pokemon-list">
            {pokemons?.results?.map((pokemon: PokemonResult, index: number) => (
              <PokemonCard
                pokemon={pokemon}
                isError={isError}
                isLoading={isLoading}
                error={error}
                key={pokemon.name}
                ids={ids[index]}
              />
            ))}
          </div>
          <div className="pokemon-preview">
            <PokemonPreview isSinglePokemon={false} />
          </div>
        </div>
        <div className="date-totalCount">
          <div className="date-fetched">
            <span>Data fetched:</span>
            {currentDate}
          </div>
          <div className="pokemon-count">
            <span>Total pokemons:</span> {pokemons?.count}
          </div>
        </div>
        <hr />
        <div className="pagination">
          <button
            type="button"
            onClick={() => {
              setPage((prev) => prev - 1);
              setOFfset((prev) => prev - 8);
            }}
            disabled={page === 0}
          >
            {"<"}
          </button>
          <input
            type="number"
            min={0}
            value={page}
            onChange={(e) => setPage(Number(e.target.value))}
          />
          <button
            type="button"
            onClick={() => {
              setPage((prev) => prev + 1);
              setOFfset((prev) => prev + 8);
            }}
            disabled={(page + 1) * 8 > pokemons?.count}
          >
            {">"}
          </button>
        </div>
      </StyledPokemonList>
    </>
  );
};

export default PokemonList;
