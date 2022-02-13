import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const ButtonStyled = styled(Button)`
  && {
    background: var(--primary);
    color: var(--white);

    &:hover {
    background: var(--primary-light);
    }
  }
`;