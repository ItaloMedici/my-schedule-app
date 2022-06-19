import { styled } from '../../theme/stitches.config';
import { Card as CardRe } from '../Register/styles';


export const Card = styled(CardRe, {
  'a': {
    color: '$gray9',
    cursor: 'pointer',
    textDecoration: 'none',

    '&:hover': {
      color: '$gray11',
      textDecoration: 'none',

      'span': {
        color: '$primaryDark',
      }
    },

    'span': {
      color: '$primary',
    }
  },


});


