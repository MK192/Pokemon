import styled from 'styled-components';
interface BorderColor {
  borderColor: string;
}
export const StyledButton = styled.button<BorderColor>`
  border: 2px solid ${({ borderColor }) => borderColor};
  padding: 14px 20px;
  border-radius: 18px;
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  img {
    height: 27px;
    width: 27px;
  }
`;