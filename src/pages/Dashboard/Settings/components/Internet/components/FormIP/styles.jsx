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
  margin-bottom: 30px;

  div:nth-of-type(1),
  div:nth-of-type(3) {
    max-width: 380px;
  }

  div:nth-of-type(2) {
    max-width: 140px;

    input {
      width: 43px;
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: end;
  gap: 20px;

  div {
    max-width: 380px;
    width: 100%;
  }
`;

export const SubTitle = styled.p`
  font-size: 0.875em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textWhite};
  margin-bottom: 10px;
`;
