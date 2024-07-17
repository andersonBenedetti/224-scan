import { Container, Title, Cod } from './styles';

export default function NamePatient({ title, cod }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Cod>{cod}</Cod>
    </Container>
  );
}
