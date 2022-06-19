import { styled } from "../../theme/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  'h1': {
    color: 'var(--gray-800)',
    fontSize: '18px',
    fontWeight: 500
  },

  '@media (max-width: 400px)': {
    'h1': {
      display: 'none',
    }
  }  
});

export const UserImage =  styled('div', {
  width: '27px',
  height: '27px',
  background: 'url("https://github.com/ItaloMedici.png")',
  backgroundSize: 'cover',
  borderRadius: '50%',
  marginRight: '20px',
});