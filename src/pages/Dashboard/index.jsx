import { useTranslation } from 'react-i18next';

import Header from '@/components/common/Header';
import Tabs from '@/components/common/Tabs';
import Exams from './Exams';
import Logs from './Logs';

import { Container } from './styles';

export default function Dashboard() {
  const { t } = useTranslation();

  const tabsData = [
    { title: t('exams.title'), content: Exams },
    { title: t('logs.title'), content: Logs },
  ];

  return (
    <Container>
      <Header />
      <Tabs tabs={tabsData} />
    </Container>
  );
}
