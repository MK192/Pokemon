import { StyledNav } from '../componentStyles/Nav.styled';
import { useUserData } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
type Props = {
    backButtonEnabled: boolean;
    navText: string;
};
const Nav = ({ backButtonEnabled, navText }: Props) => {
    const { logedUser } = useUserData();
    const navigate = useNavigate();
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
                <span className="title">{navText}</span>
            </div>
            {logedUser ? (
                <button type="button" className="catched-number">
                    {logedUser.pokemons.length}
                </button>
            ) : null}
        </StyledNav>
    );
};

export default Nav;
