import { keyframes } from "@stitches/react"
import { styled } from "../../theme/stitches.config"


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
  gridTemplateColumns: '1fr 1fr 1fr',

  '@media (max-width: 1200px)': {
    gridTemplateColumns: '1fr 1fr',
  },
    
  '@media (max-width: 830px)': {
    gridTemplateColumns: '1fr'
  },
})

export const EmptyFeed = styled('div', {
  width: '100%',
  padding: '$10',
  backgroundColor: '$gray3',
  textAlign: 'center',
  border: '3px dashed $gray7',
  borderRadius: '$lg',
  opacity: .8,
  color: '$textColor'
})

const skeleton = keyframes({
  '0%': { backgroundColor: '$gray7' },
  '50%': { backgroundColor: '$gray6' },
  '100%': { backgroundColor: '$gray4' },
})

export const SkeletonFeed = styled('div', {
  width: '100%',
  padding: '$12',
  borderRadius: '$lg',
  animation: `${skeleton} 500ms linear infinite alternate;`,
})