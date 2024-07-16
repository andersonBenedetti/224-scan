import logo from '/logo-user.png';

import { Container, LogoImg } from './styles';

export default function Logo() {
  return (
    <Container>
      <LogoImg src={logo} alt="Logo" />
    </Container>
  );
}
