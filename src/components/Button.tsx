import { StyledButton } from '../componentStyles/Button.styled';

type Props = {
    text: string;
    icon: boolean;
    borderColor: string;
    buttonColor: string;
    handleClick: () => void;
};

const Button = ({
    text,
    icon,
    borderColor,
    buttonColor,
    handleClick,
}: Props) => {
    return (
        <StyledButton
            borderColor={borderColor}
            buttonColor={buttonColor}
            onClick={handleClick}
        >
            {icon && <img src="white-pokeball.png" alt="white pokeball" />}{' '}
            {text}
        </StyledButton>
    );
};

export default Button;
