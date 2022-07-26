import { styled } from "../../../theme/stitches.config";

export const BaseButton = styled('button', {
  fontSize: '$md',
  borderRadius: '$md',
  height: 'fit-content',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',
  cursor: 'pointer',

  transition: 'background .2s',
  outline: 'none',

  '& label': {
    cursor: 'pointer',
    fontSize: '$sm',
    flex: 1,
  },

  '& svg': {
    height: '1.05rem',
    width: '1.05rem',
  },

  '&:disabled': {
    opacity: .5,
    pointerEvents: 'none',
  }
})
