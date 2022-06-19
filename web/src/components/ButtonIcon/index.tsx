import React from 'react';
import { IconButton } from './styles';

// import { Container } from './styles';

type ButtonIconProps = any & {
  onClick: (e: any) => void;
  color?: string;
  bg?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ children, onClick, color = "white", bg, ...rest }) => {

  const style = {
    color: color,
    background: bg,
  }

  return (
    <IconButton
      onClick={onClick}
      {...rest}
    >
      {children}
    </IconButton>
  );
}

export default ButtonIcon;