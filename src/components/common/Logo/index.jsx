import logo from '/logo.png';

import { Container, LogoImg } from './styles';

export const Logo = () => {
  return (
    <Container>
      <LogoImg src={logo} alt="Logo" />
    </Container>
  );
};
