import { StyledPokemonCard } from '../componentStyles/PokemonCard.styled';
import { useSelectedId } from '../context/SelectedPokemonContext';
import { PokemonResult } from '../types/types';
type Props = {
    pokemon: PokemonResult;
    isError: boolean;
    isLoading: boolean;
    error: unknown;
    ids: number | null;
};
const PokemonCard = ({ pokemon, isError, isLoading, error, ids }: Props) => {
    const { selected, setSelected } = useSelectedId();

    if (isLoading) return <div>Loading...</div>;

    if (isError && error instanceof Error)
        return <div>An error has occurred: ${error.message}</div>;

    return (
        <StyledPokemonCard>
            <div
                className={
                    selected === ids ? 'pokemon-card-selected' : 'pokemon-card'
                }
                onClick={() => {
                    ids && setSelected(ids);
                    localStorage.setItem('selected', JSON.stringify(ids));
                }}
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
