import React from 'react';
import { useIntl } from 'react-intl';
import { TextFieldProps } from '../InputText';

import { Container, Label, InputArea } from './style';

const InputTextArea: React.FC<TextFieldProps> = (
  { idLabel, value, onChange, name, children, idPlaceholder, size, invalid, disabled }
) => {
  const { formatMessage } = useIntl();

  return (
    <Container>
    {idLabel &&
      <Label>{formatMessage({ id: idLabel })}</Label>
    }
    <InputArea
      size={size}
      onChange={onChange}
      value={value}
      name={name}
      placeholder={idPlaceholder && formatMessage({ id: idPlaceholder })}
      invalid={invalid}
      disabled={disabled}
      rows={4}
    />
    {children}
  </Container>);
}

export default InputTextArea;