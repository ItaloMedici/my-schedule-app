import { PlusIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import SearchField from '../../components/Fields/SearchField';
import Navbar from '../../components/Navbar';

import { useIntl } from 'react-intl';
import Schedule from '../../components/Schedule';
import { useToast } from '../../contexts/toast';
import { ScheduleFeed } from '../../models/Feed';
import { buildFeed } from '../../services/ScheduleService';
import { Header, Main, Wrapper } from './styles';
import Feed from '../../components/Feed';

const Home: React.FC = () => {
  const { formatMessage, formatDate } = useIntl();
  const {showWarn, showError} = useToast();
  const [feed, setFeed] = useState<ScheduleFeed>();

  useEffect(() => {
    buildFeed()
      .then(resp => setFeed(resp.data))
      .catch(err => {
        let {messageCode} = err?.response?.data;
        showError(formatMessage({id: `errors.${messageCode}`}))
      })
  }, []);

  return (
    <>
      <Navbar />

      <Main>
        <Header>
          <h1>{formatMessage({id: "label.appointments"})}</h1>
          <Wrapper>
            <SearchField />
            <Button
              onClick={(e) =>  showWarn("Erro ao abrir", "Conferir erro")}
              idLabel="label.newAppointment"
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
        <Feed feed={feed} />
      </Main>

    </>
  );
}

export default Home;