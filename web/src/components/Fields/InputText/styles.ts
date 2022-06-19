import { styled } from "../../../theme/stitches.config";
import * as LabelPrimitive from '@radix-ui/react-label';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  position: 'relative',
})

export const Label = styled(LabelPrimitive.Root, {
  fontSize: '$md',
  marginBottom: '$2'
});

export const Input = styled('input', {
  width: '100%',
  backgroundColor: '$backgrond',
  borderRadius: '$md',
  border: '1px solid $gray5',

  fontSize: '$md',

  marginBottom: '$4',

  '&:focus': {
    outline: 'none',
    borderColor: '$primary',
    boxShadow: '$primary'
  },

  transition: 'background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s',

  variants: {
    size: {
      sm: {
        padding: '$3'
      },
      md: {
        padding: '$5'
      },
      xl: {
        padding: '$7'
      }
    },

    invalid: {
      true: {
        borderColor: '$error',
        
        '&:focus': {
          boxShadow: '$error',
          borderColor: '$error',
        }
      }
    }
  },

  defaultVariants: {
    size: 'sm'
  }
});