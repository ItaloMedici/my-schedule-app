import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ButtonStyled } from './styles';

type ButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, startIcon, endIcon }) => {
  return (
    <>
      <ButtonStyled
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {label}
      </ButtonStyled>
    </>
  );
}

export default Button;