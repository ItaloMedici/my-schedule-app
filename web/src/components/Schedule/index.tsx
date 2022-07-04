import { gray } from '@radix-ui/colors';
import { DividerVerticalIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useIntl } from 'react-intl';
import { ScheduleRes } from '../../models/Feed';

import { Container, Time, Name, Info, Header } from './styles';

type ScheduleType = { 
  data: ScheduleRes, 
  overdue?: boolean
}

const Schedule: React.FC<ScheduleType> = ({ data, overdue }) => {
  const { formatTime, formatNumber } = useIntl();
  const state = (data.finished && 'finished') || (overdue && 'overdue') || 'primary';
  
  return (
    <Container finalized={data.finished}>
      <Header>
        <Time state={state}>
          <h1>{formatTime(data.appointment)}</h1>
        </Time>
        <Name>
          <h2>{data?.client?.name || "-"}</h2>
        </Name>
      </Header>
      <Info>
        {data?.description && 
          <p>{data.description}</p>
        }
        {data?.price &&
          (
            <>
              <DividerVerticalIcon color={gray.gray6} />
              <p>{
                formatNumber(data.price, {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </p>
            </>
          )
        }
      </Info>
    </Container>
  );
}

export default Schedule;