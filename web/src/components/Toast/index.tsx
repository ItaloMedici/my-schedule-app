import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';
import { ToastAction, ToastCloseButton, ToastDescription, ToastProvider, ToastStyled, ToastTitle, ToastViewport } from './styles';

type ToastType = {
  onOpenChange: (open: boolean) => void,
  open: boolean,
  title: string,
  message?: string
  state?: "primary" | "success" | "error" | "warning"
}

const Toast: React.FC<ToastType> = ({ onOpenChange, open, title, message, state }) => {

  return (
    <ToastProvider swipeDirection="right">

      <ToastStyled
        open={open}
        onOpenChange={onOpenChange}
        state={state}
      >
        <ToastTitle state={state}>{title}</ToastTitle>
        {message && <ToastDescription state={state}>
          {message}
        </ToastDescription>}
        <ToastAction asChild altText="Close">
          <ToastCloseButton
            color={state}
          >
            <Cross2Icon />
          </ToastCloseButton>
        </ToastAction>
      </ToastStyled>
      <ToastViewport />
    </ToastProvider>
  );
}

export default Toast;