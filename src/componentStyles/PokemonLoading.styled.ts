import styled from 'styled-components';
export const StyledPokemonLoading = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 15px 30px 15px;

  .filter-loading,
  .total-pokemons-loading {
    align-self: flex-end;
    font-size: 1.6rem;
    color: #818181;
    font-weight: 400;
  }

  hr {
    width: 100%;
    margin: 20px 0px;
    border: 1px solid #efefef;
  }

  .loading-message {
    font-size: 2.4rem;
    color: #818181;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    margin: 0;

    line-height: 28.13px;
  }
  .total-pokemons-loading {
    font-size: 1.4rem;
  }
`;
