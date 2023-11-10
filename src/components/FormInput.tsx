import { forwardRef } from 'react';
import { StyledFormInput } from '../componentStyles/FormInput.styled';

type Props = {
  labelText: string;
  error: string | undefined;
  notice: string;
};

const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ labelText, error = '', notice = '', ...other }: Props, ref) => {
    return (
      <StyledFormInput>
        <div className="label-container">
          <label>{labelText}</label>
          {notice && !error && <label className="message">{notice}</label>}
          {error && <label className="error">{error}</label>}
        </div>
        <input type="text" ref={ref} {...other} />
      </StyledFormInput>
    );
  }
);

export default FormInput;
