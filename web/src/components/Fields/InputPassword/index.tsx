import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { InputText, TextFieldProps } from '../InputText';
import { ShowPassword, Container } from './styles';


const InputPassword: React.FC<TextFieldProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <InputText  {...props} type={showPassword ? "text" : "password"} >
      <ShowPassword
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </ShowPassword>
      </InputText>
    </Container>
  );
}

export default InputPassword;