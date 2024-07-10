import { Container } from './styles';

export default function Button({ textButton, customStyles, onClick, href }) {
  const isLink = Boolean(href);

  return (
    <Container
      as={isLink ? 'a' : 'button'}
      href={href}
      onClick={onClick}
      style={customStyles}>
      {textButton}
    </Container>
  );
}
