import styled from 'styled-components';
export const StyledPokemonList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 15px 30px 15px;
  flex-wrap: wrap;
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
  .pokemon-content {
    display: flex;

    gap: 20px;
  }
  .pokemon-list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    max-width: 65%;
  }
  .pokemon-preview {
    width: 35%;

    height: 500px;
  }
  .date-totalCount {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    span {
      color: #969696;
    }
  }
  .pagination {
    align-self: center;
    display: flex;
    gap: 10px;
    button,
    input {
      width: 32px;
      height: 32px;
      border: 1px solid #dfe3e8;
      background-color: white;
    }
    button {
      color: #dfe3e8;
      font-size: 18px;
      &:disabled {
        background-color: #c4cdd5;
        color: white;
      }
    }
    input {
      text-align: center;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
