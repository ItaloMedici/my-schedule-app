import { Divider, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/Button';
import InputText from '../../components/Fields/InputText';
import LoginIcon from '@mui/icons-material/Login';

import { Container, Card } from './styles';
import ButtonIcon from '../../components/ButtonIcon';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type State = {
  email: string;
  password: string;
  showPassword: boolean;
}

const Auth: React.FC = () => {
  const [values, setValues] = useState<State>({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  }

  return (
    <Container>
      <Card>
        <div>
          <h1>Login</h1>
          <Divider />
        </div>

        <div className="form">
          <InputText
            label="Email"
          />
          <InputText
            label="Senha"
            type={values.showPassword}
            endAdornment={
              <InputAdornment position="end">
                <ButtonIcon
                  onClick={(handleClickShowPassword)}
                  edge="end"
                  color="var(--gray-300)"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </ButtonIcon>
              </InputAdornment>
            }
          />

          <Button
            label="Login"
            endIcon={<LoginIcon />}
          />
        </div>
        <a>Criar conta

        </a>
      </Card>
    </Container>
  );
}

export default Auth;