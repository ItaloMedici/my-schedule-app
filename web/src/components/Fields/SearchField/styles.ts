import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const TextFieldStyled = styled(TextField, {})`

  .MuiOutlinedInput-root {
    background: var(--white);
    border-radius: 36px;

    fieldset {
      border: none;
    }
  }


  .Mui-focused {
    box-shadow: 0 0 10px var(--gray-100);

    fieldset {
      border: 1px solid var(--gray-100) !important;
    }
  }
`;