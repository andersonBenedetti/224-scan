import { Container } from './styles';

export default function Button({
  textButton,
  customStyles,
  onClick,
  href,
  className,
  bordered = false,
}) {
  const isLink = Boolean(href);

  return (
    <Container
      as={isLink ? 'a' : 'button'}
      href={href}
      onClick={onClick}
      style={customStyles}
      className={`${className} ${bordered ? 'bordered' : ''}`}>
      {textButton}
    </Container>
  );
}
