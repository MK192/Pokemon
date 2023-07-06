import { useState } from 'react';
import { StyledNav } from '../componentStyles/Nav.styled';
const Nav = () => {
  const [pokemonCatched, setPokemonCatched] = useState(2);
  return (
    <StyledNav>
      <div className="left-item">
        <span className="title">Pokemon App</span>
      </div>
      <div className="right-item">
        <span className="catched-number">{pokemonCatched}</span>
      </div>
    </StyledNav>
  );
};

export default Nav;
