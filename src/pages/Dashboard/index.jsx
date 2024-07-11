import Tabs from '@/components/common/Tabs';
import Exams from '@/components/common/Exams';
import Logs from '@/components/common/Logs';

import { Container } from './styles';

const tabsData = [
  { title: 'Exams', content: Exams },
  { title: 'Logs', content: Logs },
];

export default function Dashboard() {
  return (
    <Container>
      <Tabs tabs={tabsData} />
    </Container>
  );
}
