import { CheckIcon, Cross2Icon, EnvelopeClosedIcon, MobileIcon, PersonIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { AsYouType, isValidPhoneNumber } from 'libphonenumber-js';
import { useAuth } from '../../contexts/auth';
import { Customer } from '../../models/Customer';
import { Flex } from '../base/Utils';
import { Button } from '../Button';
import { InputText } from '../Fields/InputText';
import {
  ButtonDialogClose,
  Dialog,
  DialogClose,
  DialogContent, DialogTitle
} from './styles';
import { isValidEmail } from '../../tools';
import { saveCustomer } from '../../services/CustomerService';

type CustomerModalType = {
  open: boolean;
  onOpenChange: () => void;
  getSelectedCustomer: () => Customer | undefined;
  customerId: string | undefined;
  updateCustomer: (customerId: any) => void
}

const CustomerModal: React.FC<CustomerModalType> = ({ getSelectedCustomer, updateCustomer, open, onOpenChange, customerId }) => {
  const { formatMessage, locale } = useIntl();
  const [invalidFields, setInvalidFields] = useState({email: false, phone: false, name: false})
  const [customer, setCustomer] = useState<Customer>();
  const asYouType = new AsYouType(locale as any)

  useEffect(() => {
    const selectedCostumer = getSelectedCustomer();

    if (!selectedCostumer) {
      setCustomer(new Customer())
    } else {
      setCustomer(selectedCostumer)
    }
  }, [customerId, getSelectedCustomer])

  const handleChange = (event: any) => {
    if (customer) {
      let { name, value } = event.target;

      if (name === 'phone') {
        value = asYouType.input(value)
      }

      setCustomer({
        ...customer,
        [name]: value
      })

      setInvalidFields({...invalidFields, [name]: false})
    }
  }

  const isValidField = () => {
    if (!customer) return false;

    let email = !isValidEmail(customer.email);
    let phone = !isValidPhoneNumber(customer.phone, locale as any);
    let name = !customer.name;
    
    setInvalidFields({email, phone, name})

    return !email && !phone && !name;
  }

  const handleSave = async () => {
    if (customer && isValidField()) {
      const response = await saveCustomer(customer);
      
      if (response.status === 200) {
        onOpenChange()
        updateCustomer(customer.id);
      } 
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>{formatMessage({ id: 'label.createNewCustomer' })}</DialogTitle>

        <Flex css={{ gap: '$3', alignItems: 'center', marginBottom: '$4' }}>
          <PersonIcon />
          <InputText
            invalid={invalidFields.name}
            idPlaceholder='label.name'
            name='name'
            value={customer?.name}
            onChange={handleChange}
            noMargin
            cssContainer={{ flex: 1 }}
          />
        </Flex>
        <Flex css={{ gap: '$3', alignItems: 'center' }}>
          <EnvelopeClosedIcon />
          <InputText
            invalid={invalidFields.email}
            type='email'
            idPlaceholder='label.email'
            name='email'
            value={customer?.email}
            onChange={handleChange}
            cssContainer={{ flex: 2, marginRight: '$1' }}
            noMargin
          />
          <MobileIcon />
          <InputText
            invalid={invalidFields.phone}
            type="tel"
            idPlaceholder='label.phone'
            name='phone'
            value={customer?.phone}
            onChange={handleChange}
            cssContainer={{ flex: 1 }}
            noMargin
          />
        </Flex>
        <Flex css={{ marginTop: '$8', justifyContent: 'flex-end' }}>
          <Button
            color="success"
            idLabel='label.save'
            iconLeft
            onClick={handleSave}
          >
            <CheckIcon />
          </Button>
        </Flex>
        <DialogClose asChild >
          <ButtonDialogClose aria-label="Close">
            <Cross2Icon />
          </ButtonDialogClose>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default CustomerModal;