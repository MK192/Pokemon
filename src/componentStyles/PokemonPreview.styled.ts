import styled from 'styled-components';
export const StyledPokemonPreview = styled.div`
  background-color: white;
  height: 500px;
  padding: 10px;
  border: 1px solid #f2f2f2;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: start;
  .pokeball {
    height: 47px;
    width: 47px;
    position: absolute;
  }
.selected-id{
  display: flex;
 background-color: #FAFBFD
 box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.09);
  align-items:center;
  justify-content:center;
  border-radius:50%;
  font-size:1.2rem;
  font-weight:700;
  border: 2px solid #FAFBFD;
  width: 23px;
  height: 23px;
}
  .preview-container {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
    .preview-image {
      height: 120px;
      width: 110px;
      margin-bottom: 15px;
    }

    .pokemon-preview-name {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
      strong {
        font-size: 20px;
      }
      img {
        width: 18px;
        height: 17px;
      }
    }
    .stats-abilities {
      width: 80%;
      font-size: 12px;
      color: #656565;
      font-weight: 700;
      hr {
        width: 100%;
        margin-bottom: 20px;
      }

      .preview-stats {
        ul {
          list-style: none;
        }

        li {
          margin-bottom: 27px;
        }
      }
      .preview-abilities {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        .ability {
          width: 89px;
          height: 15px;
          border: 1px solid #f2f2f2;
          box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          text-align: center;
        }
      }
    }
  }
`;
