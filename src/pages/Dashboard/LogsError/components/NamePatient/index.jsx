import { Container, Cod, Title } from './styles';

export default function NamePatient({ cod, title }) {
  return (
    <Container>
      <Cod>{cod}</Cod>
      <Title>{title}</Title>
    </Container>
  );
}
