import { keyframes, styled } from "@stitches/react";
import * as ToastPrimitive from '@radix-ui/react-toast';

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
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$3',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
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

  variants: {
    state: {
      primary: {
        backgroundColor: '$background',
      },
      success: {backgroundColor: '$successLight'},
      error: {backgroundColor: '$errorLight'},
      warning: {}
    },
  },

  defaultVariants: {
    state: 'primary'
  }
});

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: 500,
  color: '$textColor',
  fontSize: '$sm',
});

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$textColor',
  fontSize: '$xs',

});

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
});

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = StyledViewport;
export const ToastStyled = StyledToast;
export const ToastTitle = StyledTitle;
export const ToastDescription = StyledDescription;
export const ToastAction = StyledAction;
export const ToastClose = ToastPrimitive.Close;