import { ToastStyled, ToastAction, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './styles';
import React, { useState } from 'react';
import { Button } from '../Button';
import { Cross2Icon } from '@radix-ui/react-icons';

type ToastType ={
  onOpenChange: (open: boolean) => void,
  open: boolean,
  title: string,
  message?: string
}

const Toast: React.FC<ToastType> = ({onOpenChange, open, title, message }) => {
  console.log(title, message)
  return (
    <ToastProvider swipeDirection="right">
    
    <ToastStyled 
      open={open} 
      onOpenChange={onOpenChange}
      state={'error'}
    >
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>
          {message}
        </ToastDescription>
        <ToastAction asChild altText="Close">
          <Button size='xs' color='neutral'>
            <Cross2Icon />
          </Button>
        </ToastAction>
      </ToastStyled>
      <ToastViewport />
    </ToastProvider>
  );
}

export default Toast;