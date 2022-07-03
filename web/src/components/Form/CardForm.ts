import { styled } from "../../theme/stitches.config";

export const CardForm = styled('div', {
  height: '90vh',

  width: '40%',
  padding: '$9',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  h1: {
    fontSize: '$2xl',
    marginBottom: '$4',
  },

  'form': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    'button': {
      margin: '$4 0 $4',
    }
  },

  'a': {
    color: '$gray9',
    cursor: 'pointer',
    fontSize: '$sm',
    textDecoration: 'none',
  },

  'a:hover': {
    textDecoration: 'underline',
    color: '$primary',
  },

  '@bp1': {
    width: '50%'
  },

  '@bp2': {
    width: '80%'
  },

  '@bp3': {
    width: '100%'
  },
});



