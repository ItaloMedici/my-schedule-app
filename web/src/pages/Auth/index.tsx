import { EnterIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

import InputPassword from '../../components/Fields/InputPassword';
import { InputText } from '../../components/Fields/InputText';
import { CardForm } from '../../components/Form/CardForm';
import { User } from "../../models/User";
import { authenticate } from '../../services/AuthService';
import { MainContainer } from '../../styles/MainContainer';

interface State extends User {
  showPassword: boolean;
}

const Auth: React.FC = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();

  const [values, setValues] = useState<State>({
    email: "",
    password: "",
    showPassword: false,
  });

  useEffect(() => { }, []);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = values;

    await authenticate({ email, password })
      .then(resp => {
        console.log("ok:", resp)
        navigate('/home', { replace: true })
      })
      .catch(err => {
        console.log("erroo:", err)
      })
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
          />

          <InputPassword
            idLabel='label.password'
            onChange={handleChange}
            value={values.password}
            name="password"
            size='md'
          />

          <Button
            onClick={handleLogin}
            idLabel='label.login'
            size='md'
          >
            <EnterIcon color='#FFF' />
          </Button>
        </form>

        <Link to='/register'>{formatMessage({ id: "messages.signIn" })}</Link>
      </CardForm>
    </MainContainer>
  );
}

export default Auth;