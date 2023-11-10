import { StyledNav } from '../componentStyles/Nav.styled';
import { useUserData } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/functions';

import PokemonModal from './PokemonModal';

type Props = {
    backButtonEnabled: boolean;
    navText: string;
};
const Nav = ({ backButtonEnabled, navText }: Props) => {
    const { loggedUser } = useUserData();
    const navigate = useNavigate();

    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <StyledNav>
            {backButtonEnabled && (
                <img
                    src="/arrowLeft.png"
                    alt="white arrow head pointed left"
                    onClick={() => navigate('/')}
                />
            )}

            <div className="left-item">
                <span className="title">{capitalizeFirstLetter(navText)}</span>
            </div>
            {loggedUser ? (
                <button
                    type="button"
                    className="catched-number"
                    onClick={() => setIsModalActive(true)}
                >
                    {loggedUser.pokemons ? loggedUser.pokemons.length : null}
                </button>
            ) : null}

            {isModalActive && <PokemonModal setShowModal={setIsModalActive} />}
        </StyledNav>
    );
};

export default Nav;
