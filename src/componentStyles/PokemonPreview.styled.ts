import styled from 'styled-components';
export const StyledPokemonPreview = styled.div`
  background-color: white;
  height: 49rem;
  padding: 10px;
  border: 1px solid #f2f2f2;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: start;

  .button-container{
    display: inline-block;
  }
  button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;

  
}

  .pokeball {
    height: 47px;
    width: 47px;
    position: absolute;
  }
  .pokeball-inactive{
    height: 47px;
    width: 47px;
    position: absolute;
    opacity:10%;
  }
  .pokeball-spining{
    height: 47px;
    width: 47px;
    position: absolute;
    animation: rotation 2s infinite linear;
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
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
    .catched-image{
      position: relative;
      height: 1.8rem;
      width: 2rem;
    
      
      .outer-image {
      width: 100%;
      height: 100%;
      margin-top:0px;
}

    .inner-image {
        
      position: absolute;
      top: 25%; 
      left: 50%;
      transform: translate(-50%, -50%);  
      width: 50%;
      height: 50%;
      z-index: 1;
       }

    }
    .pokemon-preview-name {
      display: flex;
      align-items: center;
     
      gap: 5px;
      margin-bottom: 15px;
      strong {
        font-size: 20px;
      }
      img {
        margin-top: 5px;
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
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        
        }
      }
      .time-fetched{
        margin-top :30px;
      }
    }
  }

  // responsive
  @media (max-width:420px){

    .preview-container{
      margin-top:40px ;
    
    }
    .preview-abilities {
       
        gap: 20px;
        
        .ability {
          width: 40% !important;          
        
        }

      }
      
      .time-fetched{
       display: none;
      
      }
}
`;
