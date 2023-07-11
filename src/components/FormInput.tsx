import { forwardRef } from 'react';
import { StyledFormInput } from '../componentStyles/FormInput.styled';

type Props = {
  labelText: string;
  error: string | undefined;
  optional: string;
};

const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ labelText, error = '', optional = '', ...other }: Props, ref) => {
    return (
      <StyledFormInput>
        <div className="label-container">
          <label>{labelText}</label>
          {optional && !error && <label className="message">{optional}</label>}
          {error && <label className="error">{error}</label>}
        </div>
        <input type="text" ref={ref} {...other} />
      </StyledFormInput>
    );
  }
);

export default FormInput;
