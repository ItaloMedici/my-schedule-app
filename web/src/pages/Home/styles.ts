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

export const Schedules = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '@bp4': {
    flexDirection: 'column'
  }
})

export const DateLegend = styled('aside', {
  marginRight: '$4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  h4: {
    fontSize: '$sm',
    color: '$textColor',
    opacity: .6,
  },

  hr: {
    borderLeft: '1px solid $gray6',
    flex: 1,
    margin: '$2'
  },

  '@bp4': {
    marginRight: 0,
    marginBottom: '$2',
    flexDirection: 'row',

    hr: {
      borderTop: '1px solid $gray6',
    }
  }
})

export const Feed = styled('div', {
  flex: 1,
  display: 'grid',
  gap: '$4',
  '@bp0': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  '@bp1': {
    gridTemplateColumns: '1fr 1fr',
  },
    
  '@bp3': {
    gridTemplateColumns: '1fr'
  },
})