import { StyledPokemonCard } from '../componentStyles/PokemonCard.styled';
import { useSelectedId } from '../context/ContextProvider';
type Props = {
  pokemon: object;
  isLoading: boolean;
  error: unknown;
  ids: number;
};
const PokemonCard = ({ pokemon, isLoading, error, ids }: Props) => {
  const { selected, setSelected } = useSelectedId();

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <StyledPokemonCard>
      <div
        className={selected === ids ? 'pokemon-card-selected' : 'pokemon-card'}
        onClick={() => setSelected(ids)}
      >
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${ids}.svg`}
          alt={`pokemon-${pokemon?.name}`}
        />
        <p className="pokemon-name">{pokemon?.name}</p>
        <span className="pokemon-id">{ids}</span>
      </div>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
