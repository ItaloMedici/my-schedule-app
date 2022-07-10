import { styled } from "@stitches/react"

export const Schedules = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$8',
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

export const FeedStyle = styled('div', {
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