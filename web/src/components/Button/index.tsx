import React from 'react';
import { ButtonStyled } from './styles';

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  iconLeft?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, onClick, iconLeft = false, ...rest }) => {
  return (
    <>
      <ButtonStyled
        onClick={onClick}
        iconLeft={iconLeft}
        {...rest}
      >
        {children}
      </ButtonStyled>
    </>
  );
}

export { Button };