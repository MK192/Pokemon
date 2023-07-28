import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { StyledPokemonSingle } from "../componentStyles/PokemonSingle.styled";
import { format } from "date-fns";

import axios from "axios";
import Nav from "./Nav";
import PokemonPreview from "./PokemonPreview";

const PokemonSingle = () => {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    error,
    data: singlePokemon,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ["pokemon", id],

    refetchOnWindowFocus: false,
    queryFn: () =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
        console.log(res.data);
        return res.data;
      }),
  });

  const currentDate = format(dataUpdatedAt, "dd MMM yy, H:mm");

  if (isLoading)
    return (
      <>
        <Nav backButtonEnabled={true} navText="Loading" />
        <p>Loading</p>
      </>
    );

  if (isError && error instanceof Error)
    return (
      <>
        <Nav backButtonEnabled={true} navText="Error" />
        <p>An error has occurred: {error.message}</p>
      </>
    );
  return (
    <>
      <Nav backButtonEnabled={true} navText={singlePokemon.name} />
      <StyledPokemonSingle>
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="pokemon background"
          className="background-pokemon-image"
        />
        <div className="pokemon-single-container">
          <PokemonPreview isSinglePokemon={true} />
        </div>
        <div className="fetch-time">
          <span>Data fetched: </span>
          {currentDate}
        </div>
      </StyledPokemonSingle>
    </>
  );
};
export default PokemonSingle;
