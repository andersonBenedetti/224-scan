import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Cod = styled.p`
  font-size: 1em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const Title = styled.p`
  font-size: 0.75;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.whiteOpacity};
`;
