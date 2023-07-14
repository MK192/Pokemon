import styled from 'styled-components';
export const StyledPokemonList = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 15px 30px 15px;

  .filter {
    align-self: flex-end;
    font-size: 1.6rem;
    color: #818181;
    select {
      min-width: 14.5rem;
      height: 3.2rem;
      border-radius: 9px;
      padding-left: 10px;
      border: 1px solid #f2f2f2;
      box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
      -moz-appearance: none; /* Firefox */
      -webkit-appearance: none; /* Safari and Chrome */
      appearance: none;
      background-image: url('SelectArrow.png');
      background-repeat: no-repeat;
      background-position-x: 95%;
      background-position-y: 50%;
    }
  }

  hr {
    width: 100%;
    margin: 20px 0px;
    border: 1px solid #efefef;
  }
  .pokemon-container {
    display: flex;
  }
  .pokemon-list {
    max-height: 60rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5px;
  }
`;
