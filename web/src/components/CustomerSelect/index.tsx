import { Pencil1Icon, PlusIcon } from '@radix-ui/react-icons';
import React, { useCallback, useEffect, useState } from 'react';
import { Customer } from '../../models/Customer';
import { getCustomers } from '../../services/CustomerService';
import Select from '../Select';
import { Container, Label, Wrapper } from './styles';

import { useIntl } from 'react-intl';
import { Button } from '../Button';
import CustomerModal from '../CustomerModal';

type CustomerSelectType = {
  value?: string;
  onChange: (value: string) => void;
  name: string;
  disabled?: boolean
}

const CustomerSelect: React.FC<CustomerSelectType> = ({ value, onChange, name, disabled, ...rest }) => {
  const { formatMessage } = useIntl();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    (async () => await findCustomers())()
  }, []);

  const findCustomers = async () => {
    const response = await getCustomers();

    if (response.data) {
      setCustomers(response.data)
    }
  }

  const buildCostumerItems = () => {
    return customers.map(c => {
      return {
        label: c.name,
        value: c.id
      }
    })
  }

  const getSelectedCustomer = useCallback(() => {
    return customers.find(c => c.id === value)
  }, [customers, value])

  const updateCustomer = useCallback((customerId) => {
    (async () => await findCustomers())()
    onChange(customerId);
  }, [value])

  return (
    <>
      <Container>
        <Label htmlFor='select'>{formatMessage({ id: 'label.customer' })}</Label>
        <Wrapper>
          <Select
            id='select'
            name={name}
            value={value}
            onChange={onChange}
            idPlaceholder='label.selectCustumer'
            items={buildCostumerItems()}
            disabled={disabled}
            {...rest}
          />
          <Button
            color='neutral'
            onClick={() => setOpenForm(true)}
            disabled={disabled}
          >
            {value
              ? <Pencil1Icon />
              : <PlusIcon />
            }
          </Button>
        </Wrapper>
      </Container>
      <CustomerModal
        open={openForm}
        onOpenChange={() => setOpenForm(false)}
        customerId={value}
        updateCustomer={updateCustomer}
        getSelectedCustomer={getSelectedCustomer}
      />
    </>
  );
}

export { CustomerSelect };

