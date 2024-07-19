import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  button {
    margin-top: 10px;
  }
`;

export const Polygon = styled.div`
  position: relative;
  width: 100%;
  max-width: 525px;
  border-radius: 10px;
  padding: 2px;
  background: linear-gradient(to bottom, #e390f4 0%, #bc07e2 100%);
  clip-path: polygon(
    0 0,
    calc(100% - 60px) 0,
    100% 60px,
    100% 100%,
    60px 100%,
    0 calc(100% - 60px)
  );
`;

export const ContainerForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: linear-gradient(to bottom, #03010c, #291947);
  clip-path: polygon(
    0 0,
    calc(100% - 60px) 0,
    100% 60px,
    100% 100%,
    60px 100%,
    0 calc(100% - 60px)
  );
  padding: 80px;

  @media (max-width: 768px) {
    padding: 50px;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 2em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const Text = styled.p`
  max-width: 300px;
  text-align: center;
  font-size: 1em;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.translucentWhite};
`;
