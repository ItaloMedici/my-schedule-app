import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useIntl } from 'react-intl';

 import { SearchStyled, Container } from './styles';

const SearchField: React.FC = () => {
  const {formatMessage} = useIntl();
  return (
    <Container>
      <MagnifyingGlassIcon />
      <SearchStyled
        placeholder={formatMessage({id: "label.search"})}
        onChange={() => {}}
      />
    </Container>
  );
}

export default SearchField;