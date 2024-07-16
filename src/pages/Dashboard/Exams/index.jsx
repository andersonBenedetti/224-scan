import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SearchInput from '@/components/common/SearchInput';

import { Container } from './styles';

export default function Exams() {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = value => {
    setSearchValue(value);
  };

  return (
    <Container>
      <SearchInput
        value={searchValue}
        onChange={handleSearchChange}
        placeholder={t('exams.searchPlaceholder')}
      />
    </Container>
  );
}
