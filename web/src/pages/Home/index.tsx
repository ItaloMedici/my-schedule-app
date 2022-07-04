import { PlusIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import SearchField from '../../components/Fields/SearchField';
import Navbar from '../../components/Navbar';

import { useIntl } from 'react-intl';
import Schedule from '../../components/Schedule';
import { ScheduleFeed } from '../../models/Feed';
import { buildFeed } from '../../services/ScheduleService';
import { DateLegend, Feed, Header, Main, Schedules, Wrapper } from './styles';
import { useToast } from '../../contexts/toast';

const Home: React.FC = () => {
  const { formatMessage, formatDate } = useIntl();
  const {showWarn} = useToast();
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
          <h1>{formatMessage({id: "label.appointments"})}</h1>
          <Wrapper>
            <SearchField />
            <Button
              onClick={(e) =>  showWarn("AAAA", "AAAA")}
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