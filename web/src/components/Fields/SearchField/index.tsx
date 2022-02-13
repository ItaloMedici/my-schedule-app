import { InputAdornment } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

 import { TextFieldStyled } from './styles';

const SearchField: React.FC = () => {
  return (
    <>
      <TextFieldStyled
        size="small"
        placeholder="Buscar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "var(--gray-200)" }}/>
            </InputAdornment>
          )
        }}
      />
    </>
  );
}

export default SearchField;