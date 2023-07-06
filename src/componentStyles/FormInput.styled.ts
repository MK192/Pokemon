import styled from 'styled-components';

export const StyledFormInput = styled.div`
  label {
    font-size: 16px;
    color: #818181;
    line-height: 18.75px;
  }
  .label-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .message {
      font-size: 12px;
      font-weight: 400;
    }
    .error {
      font-size: 12px;
      font-weight: 400;
      color: red;
    }
  }
  input {
    width: 32rem;
    height: 4.1rem;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.05);
    margin-bottom: 18px;
    font-size: 16px;
    padding-left: 15px;
  }
`;
