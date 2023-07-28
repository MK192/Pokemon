import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-color: #7c68ee;
  height: 5.5rem;
  img {
    height: 21px;
    width: 21px;
    margin-left: 20px;
    cursor: pointer;
  }
  span {
    font-size: 2.4rem;
    font-weight: 700;
  }
  .left-item {
    margin-right: auto;
    margin-left: auto;
    color: white;
  }
  .right-item {
    align-self: center;
    text-align: center;
    margin-right: 20px;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
    color: black;
  }
`;
