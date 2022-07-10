import { styled } from "../../theme/stitches.config";

export const BaseButton = styled('button', {
  fontSize: '$md',
  borderRadius: '$md',
  height: 'fit-content',
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  cursor: 'pointer',

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

})


export const ButtonStyled = styled(BaseButton, {
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
          color: '$background',
        },

        '& path': {
          color: '$background'
        },
      },
      neutral: {
        background: '$background',
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