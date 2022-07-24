import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { styled } from '../../theme/stitches.config';
import { LabelBase } from '../Fields/Base';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$4'
})

export const Label = styled('label', LabelBase, {
  margin: 0,
});

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: '$background',
  width: 20,
  height: 20,
  borderRadius: '$md',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $gray5',
  lineHeight: 0,
  transition: 'background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s',

  '&:focus': { 
    boxShadow: `$primary`,
    borderColor: '$primary',
  },
  
  
  '&:not(:disabled)': {
    cursor: 'pointer',
    
    '&:hover': { 
      backgroundColor: '$gray2' 
    },
  },

  '&[data-state="checked"]': {
    background: '$primary',
    borderColor: '$primaryA',

    '&:hover': { 
      backgroundColor: '$primaryDark' 
    },
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& svg path': {
    color: '$background'
  }
});

// Exports
export const CheckboxControll = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;