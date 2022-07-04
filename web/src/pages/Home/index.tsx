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
import { buildFeed } from '../../services/ScheduleService';
import { useAuth } from '../../contexts/auth';
import { ScheduleFeed } from '../../models/Feed';

const Home: React.FC = () => {
  const { formatMessage, formatDate } = useIntl();
  const [feed, setFeed] = useState<ScheduleFeed>();

  useEffect(() => {
    buildFeed()
      .then(resp => setFeed(resp.data))
      .catch(err => alert(err))
  }, []);

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
        {feed?.overdue && (
          <Schedules>
            <DateLegend>
              <h4>{formatDate(feed.overdue.label, {
                  day: '2-digit',
                  month: '2-digit'
              })}</h4>
              <hr />
            </DateLegend>
            <Feed>
              {feed.overdue.schedules.map(schedule => (
                <Schedule data={schedule} overdue />
              ))}
            </Feed>
        </Schedules>
        )}
        {feed?.avaliable.map(avaliables => (
          <Schedules>
            <DateLegend>
              <h4>{formatDate(avaliables.label, {
                  day: '2-digit',
                  month: '2-digit'
              })}</h4>
              <hr />
            </DateLegend>
            <Feed>
              {avaliables.schedules.map(schedule => (
                <Schedule data={schedule}/>
              ))}
            </Feed>
          </Schedules>
        ))}
      </Main>

    </>
  );
}

export default Home;