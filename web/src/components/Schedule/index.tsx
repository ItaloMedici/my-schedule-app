import React from 'react';

import { Container, Time, Info, Wrapper } from './styles';

const Schedule: React.FC = () => {
  return (
    <Container>
      <Time>
        <h1>08:00</h1>
      </Time>
      <Info>
        <h2>Fernanda Silva Medeiros </h2>

        <Wrapper>
          <p>Limepeza de Pele</p>
          <p>R$ 120,00</p>
        </Wrapper>
      </Info>
    </Container>
  );
}

export default Schedule;