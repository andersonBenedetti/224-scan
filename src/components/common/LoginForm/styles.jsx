import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    calc(100% - 40px) 0,
    100% 40px,
    100% 100%,
    40px 100%,
    0 calc(100% - 40px)
  );
`;

export const ContainerForm = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: linear-gradient(to bottom, #03010c, #291947);
  clip-path: polygon(
    0 0,
    calc(100% - 40px) 0,
    100% 40px,
    100% 100%,
    40px 100%,
    0 calc(100% - 40px)
  );
  padding: 50px 100px;
`;

export const Title = styled.p`
  font-size: 2em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const Text = styled.p`
  font-size: 2em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textWhite};
`;
