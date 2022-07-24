import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useLocation, useParams } from 'react-router-dom';
import { InputText } from '../../components/Fields/InputText';
import { ToolBarForm } from '../../components/ToolBarForm';
import { useToast } from '../../contexts/toast';
import { Schedule } from '../../models/Schedule';
import { getSchedule } from '../../services/ScheduleService';

import { Container, DateWrapper } from './styles';

const ScheduleForm: React.FC = () => {
  const { formatDate, formatTime, formatNumber } = useIntl();
  const { showError } = useToast();
  const { idSchedule } = useParams();
  const [schedule, setSchudule] = useState<Schedule>(new Schedule());
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
    } else {
      setAllowEdit(true)
    }

  }, [])



  return (
    <Container>
      <ToolBarForm
        allowEdit={allowEdit}
        onEdit={() => setAllowEdit(true)}
      />
      <InputText
        name="description"
        value={schedule.description}
        idLabel="label.description"
        disabled={!allowEdit}
      />
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
        value={formatNumber(schedule.price || 0, {style: 'currency', currency: 'BRL'})}
        idLabel="label.price"
        disabled={!allowEdit}
      />
      <InputText
        name="client"
        value={schedule.client}
        idLabel="label.customer"
        disabled={!allowEdit}
      />
    </Container>
  );
}

export default ScheduleForm;