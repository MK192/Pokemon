import { useParams, useLocation } from 'react-router-dom';
import { StyledPokemonSingle } from '../componentStyles/PokemonSingle.styled';
import { format } from 'date-fns';

import Nav from './Nav';
import PokemonPreview from './PokemonPreview';

const PokemonSingle = () => {
    const { id } = useParams();
    const location = useLocation();
    const selectedName = location.state;
    const currentDate = format(Date.now(), 'dd MMM yy, H:mm:ss');

    return (
        <>
            <Nav backButtonEnabled={true} navText={selectedName} />
            <StyledPokemonSingle>
                <img
                    src={`https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt="pokemon background"
                    className="background-pokemon-image"
                />
                <div className="pokemon-single-container">
                    <PokemonPreview isSinglePokemon={true} />
                </div>
            </StyledPokemonSingle>
        </>
    );
};
export default PokemonSingle;
