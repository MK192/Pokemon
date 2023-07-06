import { StyledFormInput } from '../componentStyles/FormInput.styled';

type Props = {
  name: string;
  error: string;
  optional: string;
  setValue: (newValue: string) => void;
};

const FormInput = ({ name, error = '', optional = '', setValue }: Props) => {
  return (
    <StyledFormInput>
      <div className="label-container">
        <label>{name}</label>
        {optional && !error && <label className="message">{optional}</label>}
        {error && <label className="error">{error}</label>}
      </div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </StyledFormInput>
  );
};

export default FormInput;
