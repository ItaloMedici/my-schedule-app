import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled } from "../../theme/stitches.config";
import { BaseButton } from '../base/Button';
import { BaseModalContent, BaseModalDescription, BaseModalOverlay, BaseModalTitle } from "../base/Modal";

const StyledOverlay = styled(DialogPrimitive.Overlay, BaseModalOverlay);

const StyledContent = styled(DialogPrimitive.Content, BaseModalContent, {
  width: '60vw',
  height: 'fit-content',
  padding: '$8',
});

const StyledTitle = styled(DialogPrimitive.Title, BaseModalTitle, {
  marginBottom: '$8'
});

const StyledDescription = styled(DialogPrimitive.Description, BaseModalDescription);

const Content = ({ children, ...props }) => {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay  />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

export const ButtonDialogClose = styled(BaseButton, {
  position: 'absolute',
  top: '$7',
  right: '$7',
  padding: '$1',
  borderRadius: '$full',

  '&:hover': {
    background: '$gray2'
  }
})

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;