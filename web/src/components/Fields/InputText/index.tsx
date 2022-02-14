import { OutlinedInput, StandardTextFieldProps, TextField } from '@mui/material';
import React from 'react';

// import { Container } from './styles';

type TextFieldProps = {
  label: string;
  error?: boolean;
  endAdornment?: React.ReactNode;
  type?: boolean;
}

const InputText: React.FC<TextFieldProps> = ({ label, error = false, endAdornment, type }) => {
  return (
    <TextField
      size="small"
      label={label}
      error={error}
      type={type ? 'text' : 'password'}
      InputProps={{
        endAdornment:(endAdornment)
      }}
    />
  );
}

export default InputText;