import { StyledNav } from '../componentStyles/Nav.styled';
import { useUserData } from './context/ContextProvider';

const Nav = () => {
  const { logedUser } = useUserData();

  return (
    <StyledNav>
      <div className="left-item">
        <span className="title">Pokemon App</span>
      </div>
      {logedUser ? (
        <div className="right-item">
          <span className="catched-number">{logedUser.pokemons.length}</span>
        </div>
      ) : null}
    </StyledNav>
  );
};

export default Nav;
