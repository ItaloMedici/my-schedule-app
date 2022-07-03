import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import ButtonIcon from '../../components/ButtonIcon';
import SearchField from '../../components/Fields/SearchField';
import Navbar from '../../components/Navbar';
import { DividerVerticalIcon, PlusIcon } from '@radix-ui/react-icons'

import { Main, Header, Wrapper, Feed, Schedules, DateLegend } from './styles';
import Schedule from '../../components/Schedule';
import { MainContainer } from '../../styles/MainContainer';
import { useIntl } from 'react-intl';
import { getAllSchedule } from '../../services/ScheduleService';
import { useAuth } from '../../contexts/auth';

const Home: React.FC = () => {
  const { formatMessage } = useIntl();

  const schedulesList = [{
    day: '27/08',
    schedules: [
      {
      id: 0,
      description: 'Limpeza de Pele',
      observation: undefined,
      price: 120,
      appointment: Date.now,
      finished: false,
    },
    {
      id: 0,
      description: 'Cabelo',
      observation: undefined,
      price: 120,
      appointment: Date.now,
      finished: false,
    },
    {
      id: 0,
      description: 'Unha',
      observation: undefined,
      price: 120,
      appointment: Date.now,
      finished: false,
    }
  ]
  }]

  getAllSchedule().then(resp => console.log(resp)).catch(err => console.log(err))

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
              idLabel="Novo Atendimento"
            >
              <PlusIcon />
            </Button>
            <Button
              onClick={() => { }}
            >
              <PlusIcon />
            </Button>
          </Wrapper>
        </Header>
        <SearchField />
        <Schedules>
          <DateLegend>
            <h4>03/07</h4>
            <hr />
          </DateLegend>
          <Feed>
            <Schedule />
            <Schedule />
            <Schedule />
            <Schedule />
            <Schedule />
          </Feed>
        </Schedules>
      </Main>

    </>
  );
}

export default Home;