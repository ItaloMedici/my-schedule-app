import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { ErrorResponse } from '../models/ErrorResponse';
import { User } from '../models/User';
import { authenticate } from '../services/AuthService';
import { useToast } from './toast';

// import { Container } from './styles';

type AuthContextData = {
  signed: boolean,
  user: User | null,
  signIn: (userData: User) => Promise<void>,
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { showError } = useToast();
  const { formatMessage } = useIntl();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setUser(JSON.parse(user))
    }
  }, [])

  const signIn = async ({ email, password }: User) => {
    await authenticate({ email, password })
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

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}