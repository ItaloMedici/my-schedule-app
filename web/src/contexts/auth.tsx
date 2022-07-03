import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../models/User';
import { authenticate } from '../services/AuthService';

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

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setUser(JSON.parse(user))
    }
  }, [])

  const signIn = async ({email, password}: User) => {
    try {
      const resp = await authenticate({ email, password });
      setUser(resp.data);
      
      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("user", JSON.stringify(resp.data));

      navigate('/home', {replace: true});
    } catch (err) {
      console.log("erroo:", err)
    }
  }

  const signOut = () => {
    setUser(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate('/login', {replace: true})
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}