import { EnterIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import InputPassword from '../../components/Fields/InputPassword';
import { InputText } from '../../components/Fields/InputText';
import { CardForm } from '../../components/Form/CardForm';
import { User } from '../../models/User';
import { register } from '../../services/AuthService';
import { MainContainer } from '../../styles/MainContainer';

const handleRegister: React.FC = () => {
  const {formatMessage} = useIntl();
  const [values, setValues] = useState<User>({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = (e: any) => {
    e.preventDefault();

    const { email, password, name } = values;
    register({ email, password, name })
      .then(res => {  
        
      })
      .catch(err => {

      })
  }

  return (
    <MainContainer>
      <CardForm>
        <h1>{formatMessage({id: "label.signUp"})}</h1>

        <form onSubmit={handleRegister} autoComplete='off'>
          <InputText
            idLabel='label.email'
            onChange={handleChange}
            value={values.email}
            name="email"
            size='md'
          />
          <InputText
            idLabel='label.user'
            onChange={handleChange}
            value={values.name}
            name="name"
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
            onClick={handleRegister}
            idLabel="label.continue"
            size='md'
          >
            <EnterIcon color='#FFF' />
          </Button>
        </form>

        <Link to='/auth'>{formatMessage({id: "messages.signIn"})}</Link>
      </CardForm>
    </MainContainer>
  );
}

export default handleRegister;