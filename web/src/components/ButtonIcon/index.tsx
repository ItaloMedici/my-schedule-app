import { IconButton } from '@mui/material';
import React from 'react';

// import { Container } from './styles';

type ButtonIconProps = {
  onClick: () => void;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ children, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{ color: "var(--gray-200)" }}
    >
      {children}
    </IconButton>
  );
}

export default ButtonIcon;