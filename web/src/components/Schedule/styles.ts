import { styled } from "../../theme/stitches.config";


export const Container = styled('a', {
  background: '#FFF',
  width: '230px',
  height: '105px',

  borderRadius: '10px',
  border: '1px solid $grey5',

  display: 'flex',

  overflow: 'hidden',

  cursor: 'pointer', 
});


export const Time = styled('div', {
  minWidth: '64px',
  background: 'var(--primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  'h1': {
    color: 'var(--white)',
    fontSize: '14px',
  }  
});

export const Info =  styled('div', {
  width: 'calc(100% - 64px)',
  padding: '15px',

  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'space-between',

  'h2': {
    fontSize: '16px',
    color: 'var(--gray-800)',

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } 
});

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  'p': {
    fontSize: '14px',
    color: 'var(--gray-500)',
  },

  'p + p': {
    marginTop: '5px',
  }
});