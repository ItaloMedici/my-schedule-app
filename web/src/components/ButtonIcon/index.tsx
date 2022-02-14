import { ExtendButtonBase, IconButton, IconButtonTypeMap } from '@mui/material';
import React from 'react';

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
      sx={style}
      {...rest}
    >
      {children}
    </IconButton>
  );
}

export default ButtonIcon;