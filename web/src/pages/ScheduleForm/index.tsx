import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Flex } from '../../components/base/Utils';
import Checkbox from '../../components/Checkbox';
import CustomerModal from '../../components/CustomerModal';
import { CustomerSelect } from '../../components/CustomerSelect';
import DialogDelete from '../../components/DialogDelete';
import { InputText } from '../../components/Fields/InputText';
import InputTextArea from '../../components/Fields/InputTextArea';
import Select from '../../components/Select';
import { ToolBarForm } from '../../components/ToolBarForm';
import { useAuth } from '../../contexts/auth';
import { useToast } from '../../contexts/toast';
import { Customer } from '../../models/Customer';
import { Schedule } from '../../models/Schedule';
import { getCustomers } from '../../services/CustomerService';
import { deleteSchedule, getSchedule, saveOrUpdateSchedule } from '../../services/ScheduleService';

import { Container, DateWrapper, StatusWrapper } from './styles';

const ScheduleForm: React.FC = () => {
  const { user } = useAuth();
  const { formatDate, formatTime, formatNumber } = useIntl();
  const { showError, showSuccess } = useToast();
  const navigate = useNavigate();
  const { idSchedule } = useParams();
  const [schedule, setSchudule] = useState<Schedule>();
  const [allowEdit, setAllowEdit] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (idSchedule) {
      (async () => {
        try {
          const response = await getSchedule(idSchedule)
          console.log(response.data.customerId)
          setSchudule(response.data);
        } catch (error: any) {
          showError(error.message)
        }
      })()
    } else if (!schedule) {
      setSchudule(new Schedule(user))
      setAllowEdit(true)
    }

  }, [])

  const handleSave = async () => {
    if (schedule) {
      const response = await saveOrUpdateSchedule(schedule);
      if (response.status === 200) {
        showSuccess('Registrado salvo com sucesso!');
        navigate('/', { replace: true })
      }
    }
  }

  const handleDelete = async () => {
    if (schedule?.id) {
      const response = await deleteSchedule(schedule.id);

      if (response.status === 200) {
        showSuccess('Registrado deletado com sucesso!');
        navigate('/', { replace: true })
      }
    }
  }

  const handleChange = (event: any) => {
    if (schedule) {
      setSchudule({
        ...schedule,
        [event.target.name]: event.target.value
      })
    }
  }

  return (
    <>
      <Container>
        <ToolBarForm
          allowDelete={!!schedule?.id}
          allowEdit={allowEdit}
          onEdit={() => setAllowEdit(true)}
          onSave={handleSave}
          onDelete={() => setShowDialog(true)}
        />
        {schedule &&
          <>
            <CustomerSelect
              name='customer'
              onChange={(value) => setSchudule({ ...schedule, customerId: value })}
              value={schedule.customerId}
              disabled={!allowEdit}
            />
            <InputText
              name="description"
              value={schedule.description}
              idLabel="label.description"
              disabled={!allowEdit}
              onChange={handleChange}
            />
            <DateWrapper>
              <InputText
                name="appointment"
                value={formatDate(schedule.appointment)}
                idLabel="label.date"
                disabled={!allowEdit}
                onChange={handleChange}
              />
              <InputText
                name="appointment"
                value={formatTime(schedule.appointment)}
                idLabel="label.time"
                disabled={!allowEdit}
                onChange={handleChange}
              />
            </DateWrapper>
            <InputText
              name="price"
              value={formatNumber(schedule.price || 0, { style: 'currency', currency: 'BRL' })}
              idLabel="label.price"
              disabled={!allowEdit}
              onChange={handleChange}
            />
            {/*             <InputText
              name="client"
              value={schedule.client}
              idLabel="label.customer"
              disabled
              onChange={handleChange}
            /> */}
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
              onChange={handleChange}
            />
            <Flex />
          </>
        }
      </Container>
      <DialogDelete open={showDialog} onHide={() => setShowDialog(false)} onDelete={handleDelete} />
    </>
  );
}

export default ScheduleForm;