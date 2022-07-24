import { CSS } from '@stitches/react';
import { useIntl } from 'react-intl';
import { Input, Container, Label } from './styles';

export type TextFieldProps = {
  idLabel?: string;
  value: any,
  name: string,
  onChange?: (e: any) => void,
  type?: "text" | "password",
  size?: "xs" | "sm" | "md" | "xl"
  idPlaceholder?: string;
  invalid?: boolean
  disabled?: boolean,
  css?: CSS
}


const InputText: React.FC<TextFieldProps> = (
  { idLabel, value, onChange, name, children, idPlaceholder, size, type = "text", invalid, disabled, css }
) => {
  const { formatMessage } = useIntl();
  return (
    <Container css={css}>
      {idLabel &&
        <Label>{formatMessage({ id: idLabel })}</Label>
      }
      <Input
        size={size}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={idPlaceholder && formatMessage({ id: idPlaceholder })}
        invalid={invalid}
        disabled={disabled}
      />
      {children}
    </Container>
  );
}

export { InputText };