import Logo from '@/components/common/Logo';

import { Container, Polygon, ContainerForm, Title, Text } from './styles';

export default function LoginForm({ title, text, children }) {
  return (
    <Container>
      <Logo />
      <Polygon>
        <ContainerForm>
          <Title>{title}</Title>
          <Text>{text}</Text>
          {children}
        </ContainerForm>
      </Polygon>
    </Container>
  );
}
