import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.p`
  font-size: 1.125em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Top = styled.div`
  display: flex;
  gap: 20px;

  div {
    max-width: 380px;
  }
`;
