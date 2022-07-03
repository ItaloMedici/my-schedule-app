import { styled } from "../../theme/stitches.config";


export const ButtonStyled = styled('button', {
  fontSize: '$md',
  borderRadius: '$md',
  height: 'fit-content',
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',

  transition: 'background .2s',
  outline: 'none',

  '& label': {
    fontSize: '$sm',
    flex: 1,
  },

  '& svg': {
    height: '1.05rem',
    width: '1.05rem',
  },

  variants: {
    size: {
      xs: {
        padding: '$1',
      },
      sm: {
        padding: '$2',
      },
      md: {
        padding: '$3',
      },
      xl: {
        padding: '$4',
      }
    },

    full: {
      true: {
        width: '100%'
      }
    },

    color: {
      primary: {
        background: '$primary',
        
        '&:hover': {
          background: '$primaryDark',
        },
      
        '&:focus, &:active': {
          boxShadow: '$primary'
        },

        '& label': {
          color: '$backgrond',
        },

        '& path': {
          color: '$backgrond'
        },
      },
      neutral: {
        background: '$backgrond',
        '&:hover': {
          background: '$gray2',
        },
      
        '&:focus, &:active': {
          boxShadow: '$gray2'
        },

        '& label': {
          color: '$gray4',
        },

        '& svg': {
          color: '$gray4',
        }
      },
    }
  },

  defaultVariants: {
    size: 'sm',
    color: 'primary'
  }
});