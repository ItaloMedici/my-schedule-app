import { styled } from "../../../theme/stitches.config";

export const Container = styled('span', {
  'input': {
    paddingRight: '2.5rem'
  }
})

export const ShowPassword = styled('a', {
  position: 'absolute',
  textDecoration: 'none',
  bottom: 30,
  right: '$4',
  height: '1rem',

  '& svg': {
    height: '1rem',
    width: '1rem',

    '*': {
      color: '$gray10',
    }
  },

});