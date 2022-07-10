import React, { createContext, useContext, useEffect, useState } from 'react';
import Toast from '../components/Toast';

// import { Container } from './styles';

type ToastContextType = {
  showWarn: (title: string, message?: string) => void;
  showError: (title: string, message?: string) => void;
  showSuccess: (title: string, message?: string) => void;
}

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

export const useToast = () => {
  return useContext(ToastContext);
}

export const ToastProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState<"primary" | "success" | "error" | "warning">();
  const [values, setValues] = useState<{ title: string, message?: string }>({
    title: ""
  });

  const baseShow = (title: string, message?: string) => {
    setOpen(true);
    setValues({title, message});
  }

  const showWarn = (title: string, message?: string) => {
    baseShow(title, message);
    setLevel("warning");
  }

  const showError = (title: string, message?: string) => {
    baseShow(title, message);
    setLevel("error");
  }

  const showSuccess = (title: string, message?: string) => {
    baseShow(title, message);
    setLevel("success");
  }


  return (
    <ToastContext.Provider value={{showWarn, showError, showSuccess}}>
      {children}
      <Toast
        onOpenChange={setOpen}
        open={open}
        title={values.title}
        message={values.message}
        state={level}
      />
    </ToastContext.Provider>
  );
}

export default ToastProvider;