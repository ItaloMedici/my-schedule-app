import React from 'react';
import ButtonIcon from '../ButtonIcon';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { Container } from './styles';
import User from '../User';

const Navbar: React.FC = () => {
  return (
    <Container>
      <User />
      <ButtonIcon onClick={() => { }}>
        <ExitToAppIcon />
      </ButtonIcon>
    </Container>
  );
}

export default Navbar;