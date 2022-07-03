import { gray } from '@radix-ui/colors';
import { DividerVerticalIcon } from '@radix-ui/react-icons';
import React from 'react';

import { Container, Time, Name, Info, Header } from './styles';

const Schedule: React.FC = () => {
  return (
    <Container>
      <Header>
        <Time>
          <h1>08:00</h1>
        </Time>
        <Name>
          <h2>Fernanda Silva Medeiros </h2>
        </Name>

      </Header>
        <Info>
          <p>Limpeza de Pele</p>
          <DividerVerticalIcon color={gray.gray6} />
          <p>R$ 120,00</p>
        </Info>
    </Container>
  );
}

export default Schedule;