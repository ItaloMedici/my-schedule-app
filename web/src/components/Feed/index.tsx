import * as Collapsible from '@radix-ui/react-collapsible';
import { EyeClosedIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useToast } from '../../contexts/toast';
import { ScheduleFeed } from '../../models/Feed';
import { buildFeed } from '../../services/ScheduleService';
import { Button } from '../Button';
import { ScheduleCard } from '../ScheduleCard';

import { DateLegend, Schedules, FeedStyle, EmptyFeed, SkeletonFeed } from './styles';

const Feed: React.FC = () => {
  const { showWarn, showError } = useToast();
  const { formatMessage, formatDate } = useIntl();
  const [feed, setFeed] = useState<ScheduleFeed>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)

        const response = await buildFeed();
        setFeed(response.data);
      } catch (err: any) {
        setLoading(false)
        let messageCode = "errorLoadingFeed";

        if (err?.response?.data) {
          messageCode = err.response.data.messageCode;
        }

        showError(formatMessage({ id: `errors.${messageCode}` }))
      } finally {
        setLoading(false)
      }
    })()
  }, []);

  return !isLoading ? (
    <>
      {feed?.overdue || feed?.avaliable ?
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
                  <ScheduleCard key={i} data={schedule} overdue />
                ))}
              </FeedStyle>
            </Schedules>
          ))}
          {feed?.avaliable.map((avaliables, i) => (
            <Schedules key={i}>
              <DateLegend key={i}>
                <h4 key={i}>{formatDate(avaliables.label, {
                  day: '2-digit',
                  month: '2-digit'
                })}</h4>
                <hr />
              </DateLegend>
              <FeedStyle key={i}>
                {avaliables.schedules.map((schedule, i) => (
                  <ScheduleCard data={schedule} key={i} />
                ))}
              </FeedStyle>
            </Schedules>
          ))}
        </>
        : <EmptyFeed>{formatMessage({ id: "messages.noAppointmentFound" })}</EmptyFeed>
      }
    </>
  ) : <SkeletonFeed />;
}

export default Feed;