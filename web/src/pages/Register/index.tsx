import { EnterIcon } from '@radix-ui/react-icons';
import React, { ChangeEventHandler, useState } from 'react';
import { Button } from '../../components/Button';
import { InputText } from '../../components/Fields/InputText';
import { User } from '../../models/User';
import { MainContainer } from '../../styles/MainContainer';
import { Card } from './styles';

const Register: React.FC = () => {
  const [values, setValues] = useState<User & { showPassword: boolean }>({
    email: "",
    name: "",
    password: "",
    showPassword: false
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <MainContainer>
      <Card>
        <div>
          <h1>Create a new account</h1>
        </div>

        <form onSubmit={() => alert("aaaa")}>
          <InputText label='Email' onChange={handleChange} value={values.email} name="email"/>
          <InputText label='Usuario' value={values.name} name="name"/>
          <InputText label='Senha' value={values.password} name="password" />

          <Button
            onClick={() => { }}
          >
            Registrar
            <EnterIcon color='#FFF' />
          </Button>
        </form>

        <a href='/auth'>Already has account?</a>
      </Card>
    </MainContainer>
  );
}

export default Register;