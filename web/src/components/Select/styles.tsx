import * as SelectPrimitive from '@radix-ui/react-select';
import { styled } from '../../theme/stitches.config';

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  minWidth: '30%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: '$md',
  padding: '$2',
  fontSize: '$md',
  lineHeight: 1,
  gap: 5,
  backgroundColor: '$background',
  border: '1px solid $gray5',
  color: '$textColor',
  marginBottom: '$4',

  '&[data-placeholder]': { color: '$primaryLight' },

  '&:focus': {
    outline: 'none',
    borderColor: '$primary',
    boxShadow: '$primary'
  },


  '&:disabled': {
    opacity: .7
  },
});

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: '$primaryAA'
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: '$background',
  borderRadius: '$md',
  border: '1px solid $gray5',
  marginLeft: 20,

  width: 'calc(100% - 20px)',

  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
});

function Content({ children, ...props }) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  );
}

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: '$sm',
  lineHeight: 1,
  color: '$primaryAA',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$textColor',
    opacity: .5,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: '$primaryAA',
    color: '$textColor',
  },
});

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: '$textColor',
});

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: '$gray4',
  margin: 5,
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$gray5',
  cursor: 'default',
};

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);

// Exports
export const Select = SelectPrimitive.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = StyledIcon;
export const SelectContent = Content;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;
