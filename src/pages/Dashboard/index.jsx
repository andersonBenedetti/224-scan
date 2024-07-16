import Tabs from '@/components/common/Tabs';
import Exams from './Exams';
import Logs from './Logs';

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
