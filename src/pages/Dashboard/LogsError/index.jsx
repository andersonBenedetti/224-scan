import { useTranslation } from 'react-i18next';

import { Button } from '@/components/common/Button';
import { NamePatient } from './components/NamePatient';

import { Container, Table, Th, Tr, Td, Reason } from './styles';

export const LogsError = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>{t('logs.table.name')}</Th>
            <Th>{t('logs.table.reason')}</Th>
            <Th>{t('logs.table.action')}</Th>
          </tr>
        </thead>
        <tbody>
          <Tr>
            <Td>
              <NamePatient
                cod={t('logs.table.users.1.cod')}
                title={t('logs.table.users.1.name')}
              />
            </Td>
            <Td>
              <Reason>{t('logs.table.users.1.reason')}</Reason>
            </Td>
            <Td>
              <Button
                textButton={t('logs.table.users.1.button')}
                href="#"
                customStyles={{
                  width: '158px',
                  height: '37px',
                }}
                bordered
              />
            </Td>
          </Tr>
        </tbody>
      </Table>
    </Container>
  );
};
