import { HelpIcon } from '@/components/icons/HelpIcon';

import {
  Container,
  Title,
  ToggleContainer,
  ToggleInput,
  ToggleSlider,
} from './styles';

export const ToggleButton = ({ checked, onChange }) => (
  <Container>
    <Title>
      auto sync ativo
      <HelpIcon />
    </Title>
    <ToggleContainer onClick={onChange}>
      <ToggleInput checked={checked} onChange={onChange} />
      <ToggleSlider />
    </ToggleContainer>
  </Container>
);
