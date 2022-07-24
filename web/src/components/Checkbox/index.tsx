import { CheckIcon } from '@radix-ui/react-icons';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { CheckboxIndicator, Container, Label, CheckboxControll } from './styles';

type CheckboxType = {
  idLabel: string;
  checked: boolean;
  onCheck: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxType> = ({ checked, onCheck, idLabel, disabled }) => {
  return (
    <Container>
      <CheckboxControll 
        id="c1" 
        checked={checked} 
        onCheckedChange={onCheck}
        disabled={disabled}
      >
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxControll>
      <Label htmlFor="c1">
        <FormattedMessage id={idLabel} defaultMessage='label' />
      </Label>
    </Container>
  );
}

export default Checkbox;