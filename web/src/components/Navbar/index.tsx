import React from 'react';
import ButtonIcon from '../ButtonIcon';

import { Container } from './styles';
import User from '../User';
import { ExitIcon } from '@radix-ui/react-icons';
import { Button } from '../Button';
import { useAuth } from '../../contexts/auth';
import { useIntl } from 'react-intl';

const Navbar: React.FC = () => {
  const { signOut} = useAuth();
  const { formatMessage } = useIntl();
  return (
    <Container>
      <User />
      <Button 
        onClick={signOut}
        size="xs"
        color='neutral'
        title={formatMessage({id: "label.exit"})}
      >
        <ExitIcon />
      </Button>
    </Container>
  );
}

export default Navbar;