import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchInput } from '@/components/common/SearchInput';
import { NamePatient } from './components/NamePatient';
import { ProgressRow, ProgressDetails } from '@/components/common/ProgressRow';
import { ToggleButton } from './components/ToggleButton';

import { Container, Table, Th, Tr, Td } from './styles';

export const Exams = () => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [isToggled, setIsToggled] = useState(false);

  const handleSearchChange = value => {
    setSearchValue(value);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Container>
      <ToggleButton checked={isToggled} onChange={handleToggle} />
      <SearchInput
        label={t('exams.search.label')}
        id="filter"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder={t('exams.search.placeholder')}
      />

      <Table>
        <thead>
          <tr>
            <Th>{t('exams.table.name')}</Th>
            <Th>{t('exams.table.status')}</Th>
            <Th>{t('exams.table.infos')}</Th>
          </tr>
        </thead>
        <tbody>
          <Tr>
            <Td>
              <NamePatient
                title={t('exams.table.users.1.name')}
                cod={t('exams.table.users.1.cod')}
              />
            </Td>
            <Td>
              <ProgressRow progressPercentage={90} hasFailed={true} >
                <ProgressDetails>
                  {t('exams.table.users.1.status')}
                </ProgressDetails>
              </ProgressRow>
            </Td>
            <Td>
              <ProgressRow progressPercentage={90}>
                <ProgressDetails>
                  {t('exams.table.users.1.info')}
                </ProgressDetails>
              </ProgressRow>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </Container>
  );
};
