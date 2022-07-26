import { amberA, amberDark, greenA, greenDark, redA, redDark } from "@radix-ui/colors";
import * as ToastPrimitive from '@radix-ui/react-toast';
import { keyframes, styled } from "@stitches/react";
import { BaseButton } from "../base/Button";

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  right: 0,
  top: 10,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: '$2',
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
});


const StyledToast = styled(ToastPrimitive.Root, {
  borderRadius: '$md',
  boxShadow: 'hsl(206 22% 7% / 15%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$3',
  display: 'grid',
  gridTemplateAreas: '"title action" "title action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '$3',
  alignItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in forwards`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out forwards`,
    },
  },
  
  border: '1px solid transparent',
  
  opacity: .95,

  variants: {
    state: {
      primary: { 
        backgroundColor: '$background', 
        borderColor: '$gray2'
      },
      success: { 
        backgroundColor: '$successLight',
        borderColor: '$successA'
      },
      error: { 
        backgroundColor: '$errorLight',
        borderColor: '$errorA'
      },
      warning: {
        backgroundColor: '$warningLight',
        borderColor: '$warningA'
      }
    },
  },

  defaultVariants: {
    state: 'primary'
  }
});

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  fontWeight: '$medium',
  fontSize: '$sm',

  variants: {
    state: {
      primary: { color: '$textColor', },
      success: { color: '$successDark' },
      error: { color: '$errorDark' },
      warning: { color: '$warning' }
    },
  },

  defaultVariants: {
    state: 'primary'
  }
});

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  marginTop: 5,
  fontSize: '$xs',

    variants: {
    state: {
      primary: { color: '$textColor', },
      success: { color: '$success' },
      error: { color: '$error' },
      warning: { color: '$warning' }
    },
  },

  defaultVariants: {
    state: 'primary'
  }
});

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
});

const ButtonToast = styled(BaseButton, {
  position: 'relative',

  padding: '$1',
  border: '1px solid transparent',

  variants: {
    color: {
      error: {
        background: '$errorA',
        borderColor: redA.redA2,

        '& svg path': {
          color: redDark.red7
        },

        '&:hover': {
          background: redA.redA4
        }
      },
      success: {
        background: '$successA',
        borderColor: greenA.greenA2,

        '& svg path': {
          color: greenDark.green7
        },

        '&:hover': {
          background: greenA.greenA4
        }
      },
      warning: {
        background: '$warningA',
        borderColor: amberA.amberA2,

        '& svg path': {
          color: amberDark.amber7
        },

        '&:hover': {
          background: amberA.amberA4
        }
      },
      primary: {
        background: '$gray2',

        borderColor: '$gray3',

        '&:hover': {
          background: '$gray3',
        }
      }
    }
  },

  defaultVariants: {
    color: 'primary'
  }
});

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = StyledViewport;
export const ToastStyled = StyledToast;
export const ToastTitle = StyledTitle;
export const ToastDescription = StyledDescription;
export const ToastAction = StyledAction;
export const ToastClose = ToastPrimitive.Close;
export const ToastCloseButton = ButtonToast;