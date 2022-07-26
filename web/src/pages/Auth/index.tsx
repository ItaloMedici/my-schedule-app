import { EnterIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

import InputPassword from '../../components/Fields/InputPassword';
import { InputText } from '../../components/Fields/InputText';
import { CardForm } from '../../components/Form/CardForm';
import { useAuth } from '../../contexts/auth';
import { User } from "../../models/User";
import { MainContainer } from '../../styles/MainContainer';

const Auth: React.FC = () => {
  const [invalid, setInvalid] = useState(false);
  const { signIn } = useAuth();
  const { formatMessage } = useIntl();

  const [values, setValues] = useState<User>({
    id: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInvalid(false);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = values;

    if (email && password) {
      signIn(values);
    } else {
      setInvalid(true)
    }
  }

  return (
    <MainContainer>
      <CardForm>
        <h1>{formatMessage({ id: "label.login" })}</h1>

        <form onSubmit={handleLogin}>
          <InputText
            idLabel='label.email'
            onChange={handleChange}
            value={values.email}
            name="email"
            size='md'
            invalid={invalid}
          />

          <InputPassword
            idLabel='label.password'
            onChange={handleChange}
            value={values.password}
            name="password"
            size='md'
            invalid={invalid}
          />

          <Button
            onClick={handleLogin}
            idLabel='label.login'
            size='md'
          >
            <EnterIcon color='#FFF' />
          </Button>
        </form>

        <Link to='/register'>{formatMessage({ id: "messages.signUp" })}</Link>
      </CardForm>
    </MainContainer>
  );
}

export default Auth;