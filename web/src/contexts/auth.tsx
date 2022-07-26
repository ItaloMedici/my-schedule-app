import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { ErrorResponse } from '../models/ErrorResponse';
import { User } from '../models/User';
import { authenticate, register } from '../services/AuthService';
import { useToast } from './toast';

// import { Container } from './styles';

type AuthContextData = {
  signed: boolean,
  user: User | null,
  signIn: (userData: User) => Promise<void>,
  signOut: () => void,
  signUp: (userData: User) => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { showError, showSuccess } = useToast();
  const { formatMessage } = useIntl();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setUser(JSON.parse(user))
    }
  }, [])

  const signIn = async (user: User) => {
    await authenticate(user)
      .then(resp => {
        setUser(resp.data);

        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("user", JSON.stringify(resp.data));

        navigate('/home', { replace: true });
      })
      .catch(err => {
        let {messageCode} = err?.response?.data;
        showError(formatMessage({id: `errors.${messageCode}`}))
      });
  }

  const signOut = () => {
    setUser(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate('/login', { replace: true })
  }

  const signUp = async (user: User) => {
    await register(user)
      .then(res => {  
        navigate('/home', { replace: true });
        showSuccess(formatMessage({id: "messages.successfullyRegistered"}))
      })
      .catch(err => {
        let {messageCode} = err?.response?.data;
        showError(formatMessage({id: `errors.${messageCode}`}))
      })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}