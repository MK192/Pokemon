import { StyledPokemonError } from "../componentStyles/PokemonError.styled";
import { QueryClient } from "@tanstack/react-query";

import Button from "./Button";

type Props = {
  offset: number;
};
const PokemonError = ({ offset }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <StyledPokemonError>
      <div className="filter-error">
        <span> error while fetching</span>

        <Button
          text="Try again"
          icon={false}
          borderColor="#292B29"
          handleClick={() =>
            queryClient.refetchQueries({
              queryKey: ["pokemons", { offset }],
              type: "active",
            })
          }
        />
      </div>
      <hr />
      <div className="error-message">
        <span>Error, data fetching failed</span>

        <Button
          text="Try again"
          icon={false}
          borderColor="#292B29"
          handleClick={() =>
            queryClient.refetchQueries({
              queryKey: ["pokemons", { offset }],
              type: "active",
            })
          }
        />
      </div>

      <div className="total-pokemons-error">error while fetching</div>
      <hr />
    </StyledPokemonError>
  );
};

export default PokemonError;
