import { styled } from "../../../theme/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  background: '$gray3',
  borderRadius: '$full',
  padding: '$2',

  boxShadow: '0 0 10px $gray1',
  outlineColor: 'transparent',

  '&:focus-within': {
    outline: '1px solid $gray7',
    boxShadow: '$gray'
  }, 
  
  transition: '.2s',

  '& svg': {
    marginRight: '$2',
    height: '1.05rem',
    width: '1.05rem',
  }
})  

export const SearchStyled = styled('input', {
  all: 'unset',
  width: '100%',
});