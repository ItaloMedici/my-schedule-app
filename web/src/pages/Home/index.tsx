import { PlusIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import SearchField from '../../components/Fields/SearchField';
import Navbar from '../../components/Navbar';
import { useIntl } from 'react-intl';
import Feed from '../../components/Feed';
import { useToast } from '../../contexts/toast';
import { ScheduleFeed } from '../../models/Feed';
import { buildFeed } from '../../services/ScheduleService';
import { Header, Main, Wrapper } from './styles';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { formatMessage, formatDate } = useIntl();
  const { showWarn, showError } = useToast();
  const navigate = useNavigate();

  const handleNewAppointment = () => {
    navigate('/atendimento');
  }

  return (
    <>
      <Navbar />

      <Main>
        <Header>
          <h1>{formatMessage({ id: "label.appointments" })}</h1>
          <Wrapper>
            <SearchField />
            <Button
              onClick={handleNewAppointment}
              idLabel="label.newAppointment"
            >
              <PlusIcon />
            </Button>
            <Button
              onClick={handleNewAppointment}
            >
              <PlusIcon />
            </Button>
          </Wrapper>
        </Header>
        <SearchField />
        <Feed />
      </Main>

    </>
  );
}

export default Home;