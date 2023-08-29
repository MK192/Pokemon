import { capitalizeFirstLetter } from '../utils/functions';
import { StyledModalInfo } from '../componentStyles/ModalInfo.styled';
import { PokemonsModal } from '../types/types';
import { useUserData } from '../context/UserContext';

type Props = {
    catchedPokemon: PokemonsModal[];
    selectedPokemonId: number | null;
};
const ModalInfo = ({ catchedPokemon, selectedPokemonId }: Props) => {
    const { logedUser } = useUserData();

    /* modalInfo provide information about what what version of this component 
    will be showed.
    There is 3 version, whitch version is displayed depends on value of catchedPokemon.length,
    is there selectedPokemonId.
    There is version when user don't have pokemon catched, there is version when user have catched pokemon/pokemon 
    and no pokemon is selected, and there is version where user have catched pokemon/pokemons and one pokemon is 
    selected for information */

    const modalInfo =
        logedUser?.pokemons && logedUser?.pokemons?.length > 0
            ? 1
            : logedUser?.pokemons &&
              logedUser?.pokemons?.length > 0 &&
              typeof selectedPokemonId !== 'number';
    2;

    // console.log(modalInfo);
    //console.log(catchedPokemon);
    //console.log(typeof selectedPokemonId);
    //console.log(logedUser);

    return modalInfo === 1 ? (
        <StyledModalInfo>
            {catchedPokemon?.length > 0 &&
            typeof selectedPokemonId === 'number' &&
            catchedPokemon ? (
                <div className="message-container-1">
                    <strong>
                        {typeof selectedPokemonId === 'number' &&
                        typeof catchedPokemon[selectedPokemonId] !== 'string' &&
                        catchedPokemon
                            ? capitalizeFirstLetter(
                                  catchedPokemon[selectedPokemonId]?.name
                              )
                            : ''}
                    </strong>
                    <div className="catched-time">
                        <p>Catched:</p>
                        <p>{catchedPokemon[selectedPokemonId]?.timeCatched}</p>
                    </div>
                </div>
            ) : (
                <div className="message-container-2">
                    <p> Hi, {logedUser?.name}</p>
                    <p>Hover over Pokemon to see some info.</p>
                </div>
            )}
        </StyledModalInfo>
    ) : (
        <StyledModalInfo>
            <div className="message-container-3">
                <p>Hi, {logedUser?.name}</p>

                <p className="empty-pokestorage">Your PokeStorage empty,</p>
                <p className="go-catch"> go catch some pokemons.</p>
            </div>
        </StyledModalInfo>
    );
};

export default ModalInfo;
