import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import ButtonIcon from '../../components/ButtonIcon';
import SearchField from '../../components/Fields/SearchField';
import Navbar from '../../components/Navbar';
import AddIcon from '@mui/icons-material/Add';



import { Main, Header, Wrapper } from './styles';

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
              label='Novo Atendimento' 
              onClick={(e) => { }}
              startIcon = {
                <AddIcon />
              }
            />
            <ButtonIcon
              onClick={() => { }}
              bg={"var(--primary)"}
            >
              <AddIcon />
            </ButtonIcon>
          </Wrapper>
        </Header>
        <SearchField />
        <Divider />

      </Main>
    </>
  );
}

export default Home;