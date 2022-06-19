import { styled } from "../../theme/stitches.config";

export const Card = styled('div', {
  height: '90vh',

  width: '60%',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  h1: {
    marginBottom: '$4',
  },

  'form': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    'button': {
      margin: '$2 0 $4',
    }
  },

  'a': {
    color: '$gray9',
    cursor: 'pointer',
  },

  'a:hover': {
    textDecoration: 'underline',
    color: '$primary',
  }
});



