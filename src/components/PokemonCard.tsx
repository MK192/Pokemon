import { StyledPokemonCard } from '../componentStyles/PokemonCard.styled';
import { useSelectedId } from '../context/SelectedPokemonContext';
import { PokemonResult } from '../types/types';
type Props = {
    pokemon: PokemonResult;
    isError: boolean;
    isLoading: boolean;
    error: unknown;
    ids: number;
};
const PokemonCard = ({ pokemon, isError, isLoading, error, ids }: Props) => {
    const { selected, setSelected } = useSelectedId();

    if (isLoading) return 'Loading...';

    if (isError && error instanceof Error)
        return 'An error has occurred: ' + error.message;

    return (
        <StyledPokemonCard>
            <div
                className={
                    selected === ids ? 'pokemon-card-selected' : 'pokemon-card'
                }
                onClick={() => {
                    setSelected(ids);
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
