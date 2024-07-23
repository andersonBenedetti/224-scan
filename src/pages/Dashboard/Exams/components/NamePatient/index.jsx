import { Container, Title, Cod } from './styles';

export const NamePatient = ({ title, cod }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Cod>{cod}</Cod>
    </Container>
  );
};
