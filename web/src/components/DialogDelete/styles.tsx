
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { styled } from "../../theme/stitches.config";
import { BaseModalContent, BaseModalDescription, BaseModalOverlay, BaseModalTitle } from "../base/Modal";

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, BaseModalOverlay);

const StyledContent = styled(AlertDialogPrimitive.Content, BaseModalContent, {
  width: '90vw',
  maxWidth: '500px',
  padding: '$8',
});

function Content({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

const StyledTitle = styled(AlertDialogPrimitive.Title, BaseModalTitle, {
  marginBottom: '$6',
});

const StyledDescription = styled(AlertDialogPrimitive.Description, BaseModalDescription, {
  marginBottom: '$8',
});

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogContent = Content;
export const AlertDialogTitle = StyledTitle;
export const AlertDialogDescription = StyledDescription;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;