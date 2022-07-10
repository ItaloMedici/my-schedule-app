import SearchField from "../../components/Fields/SearchField";
import { styled } from "../../theme/stitches.config";

export const Container = styled('div', {});

export const Main = styled('div', {
  horizontalPadding: '',
  paddingTop: 45,
  
  background: '$gray2',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',

  overflowY: 'scroll',

  '> :nth-child(2)': {
    display: 'none'
  },

  '@bp3': {
    '> :nth-child(2)': {
      display: 'inline-flex',
      marginBottom: '10px',
    }
  }
});

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',

  padding: '40px 0 10px',

  justifyContent: 'flex-end',
  gap: '18px',


  'h1': {
    flex: '1',
    fontSize: '$2xl'
  }
});


export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '18px',

  '> :nth-child(3)': {
    display: 'none'
  },

  '@bp4': {
    '> :nth-child(2)': {
      display: 'none'
    },

    '> :nth-child(3)': {
      display: 'inline-flex',
    }
  },

  '@bp3': {
    '> :nth-child(1)': {
      display: 'none'
    }
  }
});
