import React from 'react';
import { useIntl } from 'react-intl';
import { ButtonStyled } from './styles';

type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>
  & React.AriaAttributes
  & {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    iconLeft?: boolean,
    idLabel?: string,
    size?: "xs" | "sm" | "md" | "xl",
    color?: "primary" | "neutral" | "danger" | "success",
    disabled?: boolean,
  }

const Button: React.FC<ButtonProps> = (
  { children, onClick, iconLeft = false, idLabel, size, color, disabled, ...rest }
) => {
  const { formatMessage } = useIntl();
  return (
    <ButtonStyled
      onClick={onClick}
      size={size}
      color={color}
      disabled={disabled}
      {...rest}
    >
      {iconLeft && children}
      {idLabel && (
        <label>{formatMessage({ id: idLabel })}</label>
      )}
      {!iconLeft && children}
    </ButtonStyled>
  );
}

export { Button };