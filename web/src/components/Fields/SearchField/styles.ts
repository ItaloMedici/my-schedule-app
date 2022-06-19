import { styled } from "../../../theme/stitches.config";
import InputText from "../InputText";

export const TextFieldStyled = styled('input', {
  background: 'var(--white)',
  borderRadius: '36px',

  'input': {
    border: 'none',
  },

  boxShadow: '0 0 10px $gray1',

  '&:focus': {
    border: '1px solid var(--gray-100) !important',
  }
});