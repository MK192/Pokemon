import { StyledPreviewMessage } from '../componentStyles/PreviewMessage.styled';
import { format } from 'date-fns';
import { UserData } from '../types/types';
import { previewMessage } from '../utils/functions';

type Props = {
    catchedPokemonNumber: UserData | null;
    catchMessage?: string;
};

const PreviewMessage = ({ catchedPokemonNumber, catchMessage }: Props) => {
    const { message, nameOfClass } = previewMessage(
        catchedPokemonNumber,
        catchMessage
    );
    const currentDate = format(Date.now(), 'dd MMM yy, H:mm:ss');

    return (
        <StyledPreviewMessage>
            <div className={nameOfClass}>
                {message}{' '}
                {catchMessage === 'catched' &&
                catchedPokemonNumber &&
                catchedPokemonNumber.pokemons &&
                catchedPokemonNumber.pokemons?.length < 9 ? (
                    <span>{currentDate}</span>
                ) : null}
            </div>
        </StyledPreviewMessage>
    );
};

export default PreviewMessage;
