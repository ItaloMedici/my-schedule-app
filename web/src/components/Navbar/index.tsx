import React from 'react';
import ButtonIcon from '../ButtonIcon';

import { Container } from './styles';
import User from '../User';
import { ExitIcon } from '@radix-ui/react-icons';

const Navbar: React.FC = () => {
  return (
    <Container>
      <User />
      <ButtonIcon 
        onClick={() => { }}
        //color={"var(--gray-200)"}
      >
        <ExitIcon />
      </ButtonIcon>
    </Container>
  );
}

export default Navbar;