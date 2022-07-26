import { CSS } from '@stitches/react';
import { useIntl } from 'react-intl';
import { Input, Container, Label } from './styles';

export type TextFieldProps = React.ComponentPropsWithRef<typeof Input> & {
  idLabel?: string;
  value: any,
  name: string,
  onChange?: (e: any) => void,
  idPlaceholder?: string;
  disabled?: boolean,
  cssContainer?: CSS
}


const InputText: React.FC<TextFieldProps> = (
  { idLabel, value, onChange, name, children, idPlaceholder, size, type = "text", invalid, disabled, cssContainer, ...rest }
) => {
  const { formatMessage } = useIntl();
  return (
    <Container css={cssContainer}>
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
        {...rest}
      />
      {children}
    </Container>
  );
}

export { InputText };