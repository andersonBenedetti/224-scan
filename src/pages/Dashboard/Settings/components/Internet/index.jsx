import { FormIP } from './components/FormIP';
import { FormProxy } from './components/FormProxy';

import { Container } from './styles';

export const Internet = () => {
  return (
    <Container>
      <FormIP />
      <FormProxy />
    </Container>
  );
};
