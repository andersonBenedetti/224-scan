import Translator from '@/components/i18n/Translator';

import Logo from '@/components/common/Logo';

import { Container, Polygon, ContainerForm, Title, Text } from './styles';

export default function LoginForm() {
  return (
    <Container>
      <Logo />
      <Polygon>
        <ContainerForm>
          <Title>
            <Translator path="signIn.message" />
          </Title>
          <Text>
            <Translator path="signIn.text" />
          </Text>
        </ContainerForm>
      </Polygon>
    </Container>
  );
}
