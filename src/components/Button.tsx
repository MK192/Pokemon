import { StyledButton } from "../componentStyles/Button.styled";

type Props = {
  text: string;
  icon: boolean;
  borderColor: string;
  handleClick: () => void;
};

const Button = ({ text, icon, borderColor, handleClick }: Props) => {
  return (
    <StyledButton borderColor={borderColor} onClick={handleClick}>
      {icon && <img src="white-pokeball.png" alt="white pokeball" />} {text}
    </StyledButton>
  );
};

export default Button;
