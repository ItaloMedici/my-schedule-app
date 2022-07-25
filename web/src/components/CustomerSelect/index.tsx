import { PlusIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { Customer } from '../../models/Client';
import { getCustomers } from '../../services/CustumerService';
import { buildFeed } from '../../services/ScheduleService';
import { Button } from '../Button';
import Select from '../Select';
import { AddButton, Container } from './styles';

type CustomerSelectType = {
  value?: string;
  onChange: (value: string) => void;
  name: string;
  disabled?: boolean
}

const CustomerSelect: React.FC<CustomerSelectType> = ({value, onChange, name, disabled, ...rest}) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getCustomers();

      if (response.data) {
        setCustomers(response.data)
      }
    })()
  }, []);

  const buildCostumerItems = () => {
    return customers.map(c => {
      return {
        label: c.name,
        value: c.id
      }
    })
  }

  return (
    <Container>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        idLabel='label.custumer'
        idPlaceholder='label.selectCustumer'
        items={buildCostumerItems()}
        disabled={disabled}
        {...rest}
      />
      <AddButton>
        <PlusIcon />
      </AddButton>
    </Container>
  );
}

export { CustomerSelect };