import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ButtonStyled } from './styles';

type ButtonProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <>
      <ButtonStyled
        onClick={onClick}
        startIcon={
          <AddIcon />
        }
      >
        {label}
      </ButtonStyled>
    </>
  );
}

export default Button;