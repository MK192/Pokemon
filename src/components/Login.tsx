import { useEffect, useState } from 'react';
import { StyledLogin } from '../componentStyles/Login.styled';

import FormInput from './FormInput';
const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const [userAge, setUserAge] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  return (
    <StyledLogin>
      <form>
        <FormInput name="Name" error="" optional="" setValue={setUserName} />

        <FormInput
          name="Age"
          error=""
          optional="you must be 12 or older"
          setValue={setUserAge}
        />
        <FormInput name="Email" error="" optional="" setValue={setUserEmail} />
        <div className="submit-button">
          <button type="submit" value="submit">
            ENTER
          </button>
        </div>
      </form>
    </StyledLogin>
  );
};

export default Login;
