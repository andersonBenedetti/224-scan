import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import NamePatient from './components/NamePatient';

import { Container, Table, Th, Tr, Td, Reason } from './styles';

export default function LogsError() {
  const { t } = useTranslation();

  const theme = useTheme();

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
                textButton={<span>{t('logs.table.users.1.button')}</span>}
                href="#"
                customStyles={{
                  width: '158px',
                  height: '37px',
                  background: `linear-gradient(to right, #25a340, #1120ac)`,
                }}
              />
            </Td>
          </Tr>
        </tbody>
      </Table>
    </Container>
  );
}
