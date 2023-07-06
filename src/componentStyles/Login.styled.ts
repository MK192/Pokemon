import styled from 'styled-components';
export const StyledLogin = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;

  .submit-button {
    text-align: center;
    margin-top: 70px;
    button {
      padding: 14px, 20px, 14px, 20px;
      border-radius: 20px;
      width: 100px;
      height: 48px;
      font-size: 14px;
      color: #818181;
      font-weight: 700;
      line-height: 20px;
      border: 2px solid #818181;
      cursor: pointer;
    }
  }
`;
