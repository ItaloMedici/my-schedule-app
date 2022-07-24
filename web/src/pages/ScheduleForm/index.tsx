import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useToast } from '../../contexts/toast';
import { Schedule } from '../../models/Schedule';
import { getSchedule } from '../../services/ScheduleService';

// import { Container } from './styles';

const ScheduleForm: React.FC = () => {
  const { showError } = useToast();
  const { idSchedule } = useParams();
  const [schedule, setSchudule] = useState<Schedule>(new Schedule());
  const [allowEdit, setAllowEdit] = useState(false);

  useEffect(() => {
    if (idSchedule) {
      const fetch = async () => {
        const data = await getSchedule(idSchedule)
        console.log(data);
        return data;
      }

      fetch().catch(err => showError(err.message));

      console.log("BBBB")
    }

  }, [])


  
  return (
    <>
      aaaa
    </>
  );
}

export default ScheduleForm;