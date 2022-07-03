import React from 'react';
import ButtonIcon from '../ButtonIcon';

import { Container } from './styles';
import User from '../User';
import { ExitIcon } from '@radix-ui/react-icons';
import { Button } from '../Button';

const Navbar: React.FC = () => {
  return (
    <Container>
      <User />
      <Button 
        onClick={() => { }}
        size="xs"
        color='neutral'
      >
        <ExitIcon />
      </Button>
    </Container>
  );
}

export default Navbar;