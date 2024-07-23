import logo from '/logo-user.png';

import { Container, LogoImg } from './styles';

export const LogoUser = () => {
  return (
    <Container>
      <LogoImg src={logo} alt="Logo" />
    </Container>
  );
};
