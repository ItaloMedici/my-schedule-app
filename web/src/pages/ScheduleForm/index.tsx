import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useLocation, useParams } from 'react-router-dom';
import Checkbox from '../../components/Checkbox';
import { InputText } from '../../components/Fields/InputText';
import InputTextArea from '../../components/Fields/InputTextArea';
import { ToolBarForm } from '../../components/ToolBarForm';
import { useAuth } from '../../contexts/auth';
import { useToast } from '../../contexts/toast';
import { Schedule } from '../../models/Schedule';
import { getSchedule } from '../../services/ScheduleService';

import { Container, DateWrapper, StatusWrapper } from './styles';

const ScheduleForm: React.FC = () => {
  const { user } = useAuth();
  const { formatDate, formatTime, formatNumber } = useIntl();
  const { showError } = useToast();
  const { idSchedule } = useParams();
  const [schedule, setSchudule] = useState<Schedule>();
  const [allowEdit, setAllowEdit] = useState(false);

  useEffect(() => {
    if (idSchedule) {
      (async () => {
        try {
          const response = await getSchedule(idSchedule)
          setSchudule(response.data);
        } catch (error: any) {
          showError(error.message)
        }
      })()
    } else if (!schedule) {
      console.log("S")
      setSchudule(new Schedule(user))
      setAllowEdit(true)
    }

  }, [])



  return (
    <Container>
      <ToolBarForm
        allowEdit={allowEdit}
        onEdit={() => setAllowEdit(true)}
      />
      {schedule &&
        <>
          <StatusWrapper>
            <InputText
              name="description"
              value={schedule.description}
              idLabel="label.description"
              disabled={!allowEdit}
              css={{ flex: 1 }}
            />

          </StatusWrapper>
          <DateWrapper>
            <InputText
              name="appointment"
              value={formatDate(schedule.appointment)}
              idLabel="label.date"
              disabled={!allowEdit}
            />
            <InputText
              name="appointment"
              value={formatTime(schedule.appointment)}
              idLabel="label.time"
              disabled={!allowEdit}
            />
          </DateWrapper>
          <InputText
            name="price"
            value={formatNumber(schedule.price || 0, { style: 'currency', currency: 'BRL' })}
            idLabel="label.price"
            disabled={!allowEdit}
          />
          <InputText
            name="client"
            value={schedule.client}
            idLabel="label.customer"
            disabled={!allowEdit}
          />
          <Checkbox
            idLabel='label.finishedAppointment'
            checked={schedule.finished}
            onCheck={(checked) => setSchudule({ ...schedule, finished: checked })}
            disabled={!allowEdit}
          />
          <InputTextArea
            name="observation"
            value={schedule.observation}
            idLabel="label.observation"
            disabled={!allowEdit}
          />
        </>
      }

    </Container>
  );
}

export default ScheduleForm;