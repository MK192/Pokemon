import { StyledPreviewMessage } from "../componentStyles/PreviewMessage.styled";
import { format } from "date-fns";
type Props = {
  catchedPokemonNumber: number;
  catchMessage?: string;
};
const PreviewMessage = ({ catchedPokemonNumber, catchMessage }: Props) => {
  let message = "";
  let nameOfClass = "";
  if (catchedPokemonNumber >= 9) {
    message = "Poke Storage full!";
    nameOfClass = "capacity-full";
  } else if (catchedPokemonNumber < 9 && catchMessage === "catched") {
    message = "catched";
    nameOfClass = "catched";
  } else if (catchedPokemonNumber < 9 && catchMessage === "failed") {
    message = "catching failed, try again";
    nameOfClass = "failed";
  }

  const currentDate = format(Date.now(), "dd MMM yy, H:mm:ss");

  return (
    <StyledPreviewMessage>
      <div className={nameOfClass}>
        {message}{" "}
        {catchMessage === "catched" && catchedPokemonNumber < 9 ? (
          <span>{currentDate}</span>
        ) : null}
      </div>
    </StyledPreviewMessage>
  );
};

export default PreviewMessage;
