import { greenA, redA } from "@radix-ui/colors";
import { styled } from "../../theme/stitches.config";
import { BaseButton } from "../base/Button";

export const ButtonStyled = styled(BaseButton, {
  position: 'relative',

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
          outline: '1px solid $colors$gray4',
          boxShadow: '$gray'
        },

        '& label': {
          color: '$textColor',
        },

        '& svg': {
          color: '$background',
        }
      },
      success: {
        background: '$successA',

        '&:hover': {
          background: '$successA4',
        },

        '&:active, &:focus': {
          outline: '1px solid',
          outlineColor: greenA.greenA5,
          boxShadow: '$success'
        },

        '& label': {
          color: '$successDark',
        },

        '& svg path': {
          color: '$successDark',
        }
      },
      danger: {
        background: '$errorA',

        '&:hover': {
          background: '$errorA4',
        },

        '&:active, &:focus': {
          outline: '1px solid',
          outlineColor: redA.redA5,
          boxShadow: '$error'
        },

        '& label': {
          color: '$errorDark',
        },

        '& svg path': {
          color: '$errorDark',
        }
      }
    },
  },

  defaultVariants: {
    size: 'sm',
    color: 'primary'
  }
});