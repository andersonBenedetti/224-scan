import { Container, Cod, Title } from './styles';

export const NamePatient = ({ cod, title }) => {
  return (
    <Container>
      <Cod>{cod}</Cod>
      <Title>{title}</Title>
    </Container>
  );
};
