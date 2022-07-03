import React from 'react';
import { useAuth } from '../../contexts/auth';

import { Container, UserImage } from './styles';

const User: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <UserImage />
      <h1>{user?.name}</h1>
    </Container>
  );
}

export default User;