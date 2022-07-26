import { keyframes } from "@stitches/react";
import { css } from "../../../theme/stitches.config";

export const BaseOverlayShowAnimation = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const BaseContentShowAnimation = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});


export const BaseModalOverlay = css({
  backgroundColor: '$modal',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${BaseOverlayShowAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const BaseModalContent = css({
  backgroundColor: '$background',
  borderRadius: '$md',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${BaseContentShowAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
})

export const BaseModalTitle = css({
  color: '$textColor',
  fontSize: '$md',
  fontWeight: '$medium',
});

export const BaseModalDescription = css({
  color: '$textColor',
  fontSize: '$sm',
  lineHeight: 1.5,
  opacity: .8,
})