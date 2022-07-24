import * as Collapsible from '@radix-ui/react-collapsible';
import { EyeClosedIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useIntl } from 'react-intl';
import { ScheduleFeed } from '../../models/Feed';
import { Button } from '../Button';
import Schedule from '../Schedule';

import { DateLegend, Schedules, FeedStyle } from './styles';

type FeedProps = {
  feed?: ScheduleFeed
}

const Feed: React.FC<FeedProps> = ({ feed }) => {
  const { formatMessage, formatDate } = useIntl();

  return (
    <>
        {feed?.overdue && feed?.overdue.map((overdue, i) => (
          <Schedules key={i}>
            <DateLegend>
              <h4>{formatDate(overdue.label, {
                day: '2-digit',
                month: '2-digit'
              })}</h4>
              <hr />
            </DateLegend>
              <FeedStyle>
                {overdue.schedules.map((schedule, i) => (
                  <Schedule key={i} data={schedule} overdue />
                ))}
              </FeedStyle>
          </Schedules>
        ))}
      {feed?.avaliable.map(avaliables => (
        <Schedules>
          <DateLegend>
            <h4>{formatDate(avaliables.label, {
              day: '2-digit',
              month: '2-digit'
            })}</h4>
            <hr />
          </DateLegend>
          <FeedStyle>
            {avaliables.schedules.map(schedule => (
              <Schedule data={schedule} />
            ))}
          </FeedStyle>
        </Schedules>
      ))}
    </>
  );
}

export default Feed;