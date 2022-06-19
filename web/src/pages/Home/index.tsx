import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import ButtonIcon from '../../components/ButtonIcon';
import SearchField from '../../components/Fields/SearchField';
import Navbar from '../../components/Navbar';
import { PlusIcon } from '@radix-ui/react-icons'


import { Main, Header, Wrapper } from './styles';
import Schedule from '../../components/Schedule';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Header>
          <h1>Atendimentos</h1>
          <Wrapper>
            <SearchField />
            <Button
              onClick={(e) => { }}
            >
              Novo Atendimento
              <PlusIcon />
            </Button>
            <ButtonIcon
              onClick={() => { }}
            //bg={"var(--primary)"}
            >
              <PlusIcon />
            </ButtonIcon>
          </Wrapper>
        </Header>
        <SearchField />
        <hr />
        <Schedule />
        <Schedule />
      </Main>
    </>
  );
}

export default Home;