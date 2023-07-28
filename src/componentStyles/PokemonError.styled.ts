import styled from 'styled-components';
export const StyledPokemonError = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 15px 30px 15px;

  .filter-error,
  .total-pokemons-error {
    display: flex;
    align-self: flex-end;
    align-items: center;
    font-size: 1.6rem;
    color: red;
    font-weight: 400;
    gap: 10px;
  }

  hr {
    width: 100%;
    margin: 20px 0px;
    border: 1px solid #efefef;
  }

  .error-message {
    font-size: 2.4rem;
    color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 60vh;
    margin: 0;

    line-height: 28.13px;
  }
  .total-pokemons-error {
    font-size: 1.4rem;
  }
`;
