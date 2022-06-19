import { styled } from "../../theme/stitches.config";


export const ButtonStyled = styled('button', {
  background: '$primary',
  color: '#FFF',
  fontSize: '$md',
  borderRadius: '$md',

  '&:hover': {
    background: '$primaryDark',
  },

  '&:focus, &:active': {
    boxShadow: '$primary'
  },

  transition: 'background .2s',

  position: 'relative',

  '& svg': {
    color: '#FFF',

    height: '1.05rem',
    width: '1.05rem',

    position: 'absolute',
  },

  variants: {
    size: {
      sm: {
        padding: '$3',

        '& svg': {
          right: '$3',
        }
      },
      md: {
        padding: '$6',

        '& svg': {
          right: '$6',
        }
      },
      xl: {
        padding: '$8',

        '& svg': {
          right: '$8',
        }
      }
    },

    iconLeft: {
      true: {

      }
    },

    full: {
      true: {
        width: '100%'
      }
    }
  },

  compoundVariants: [
    {
      size: 'sm',
      iconLeft: true,
      css: {
        '& svg': {
          left: '$3',
        }
      }
    },
    {
      size: 'md',
      iconLeft: true,
      css: {
        '& svg': {
          left: '$6',
        }
      }
    },
    {
      size: 'xl',
      iconLeft: true,
      css: {
        '& svg': {
          left: '$8',
        }
      }
    },
  ],

  defaultVariants: {
    size: 'sm'
  }
});