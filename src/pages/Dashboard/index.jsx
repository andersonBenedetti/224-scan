import { useTranslation } from 'react-i18next';

import { Header } from '@/components/common/Header';
import { Tabs } from '@/components/common/Tabs';
import { Exams } from './Exams';
import { LogsError } from './LogsError';
import { Settings } from './Settings';

import { Container } from './styles';

export const Dashboard = () => {
  const { t } = useTranslation();

  const tabsData = [
    { title: t('exams.title'), content: Exams },
    { title: t('logs.title'), content: LogsError },
    { title: t('settings.title'), content: Settings },
  ];

  return (
    <Container>
      <Header />
      <Tabs tabs={tabsData} />
    </Container>
  );
};
