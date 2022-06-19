import { EnterIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';

import ButtonIcon from '../../components/ButtonIcon';
import InputPassword from '../../components/Fields/InputPassword';
import { InputText } from '../../components/Fields/InputText';
import { User } from "../../models/User";
import { MainContainer } from '../../styles/MainContainer';
import { Card } from './styles';

interface State extends User {
  showPassword: boolean;
}

const Auth: React.FC = () => {
  const [values, setValues] = useState<State>({
    email: "",
    password: "",
    showPassword: false,
  });

  useEffect(() => { }, []);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value]
    });
  }

  return (
    <MainContainer>
      <Card>
        <div>
          <h1>Login</h1>
        </div>

        <form>
          <InputText
            label='Email' 
            onChange={handleChange} 
            value={values.email} 
            name="email" 
          />

          <InputPassword
            label='Senha' 
            onChange={handleChange} 
            value={values.password} 
            name="password" 
          />


          <Button
          //onClick={() => { }}
          >
            Sign In
            <EnterIcon color='#FFF' />
          </Button>
        </form>

        <a href='/register'>Don't have an account? <span>Sign up</span></a>
      </Card>
    </MainContainer>
  );
}

export default Auth;