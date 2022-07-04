import React, { createContext, useContext, useEffect, useState } from 'react';
import Toast from '../components/Toast';

// import { Container } from './styles';

type ToastContextType = {
  showWarn: (title: string, message: string) => void
}

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

export const useToast = () => {
  return useContext(ToastContext);
}

export const ToastProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<{ title: string, message?: string }>({
    title: ""
  });

  const showWarn = (title: string, message: string) => {
    setValues({title, message})
    setOpen(true)
  }

  return (
    <ToastContext.Provider value={{showWarn}}>
      {children}
      <Toast
        onOpenChange={setOpen}
        open={open}
        title={values.title}
        message={values.message}
      />
    </ToastContext.Provider>
  );
}

export default ToastProvider;