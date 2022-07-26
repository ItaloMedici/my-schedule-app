import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useIntl } from 'react-intl';
import {
  Select as SelectRoot,
  SelectContent,
  SelectIcon,
  SelectItem, SelectItemIndicator,
  SelectItemText,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './styles';

type ItemSelectType = {
  value: string,
  label: string
}

type SelectType = {
  idPlaceholder: string,
  items: ItemSelectType[],
  disabled?: boolean;
  idLabel?: string;
  value?: string;
  onChange: (value: string) => void;
  name: string;
  id: string;
}

const Select: React.FC<SelectType> = ({ idPlaceholder, idLabel, items, value, name, onChange, disabled, id, ...rest }) => {
  const { formatMessage } = useIntl();
  return (
    <SelectRoot
      name={name}
      value={value}
      onValueChange={onChange}
      {...rest}
    >
      <SelectTrigger
        id={id}
        disabled={disabled}
        aria-label={formatMessage({ id: idPlaceholder })}
      >
        <SelectValue
          aria-label={value}
          placeholder={formatMessage({ id: idPlaceholder })}
        />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          {items.map((item, i) => (
            <SelectItem value={item.value} key={i}>
              <SelectItemText>{item.label}</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectViewport>
      </SelectContent>
    </SelectRoot>
  );
}

export default Select;