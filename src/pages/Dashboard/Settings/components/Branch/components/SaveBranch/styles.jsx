import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div:nth-of-type(2) {
    max-width: 380px;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;

  div:nth-of-type(1) {
    max-width: 380px;
  }

  div:nth-of-type(2) {
    max-width: 134px;
  }

  div:nth-of-type(3) {
    max-width: 152px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;

  a {
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.textWhite};
    background-image: none;

    &:hover {
      border: none;
      background-image: linear-gradient(
        to right,
        #c833e8 0%,
        #c833e8 51%,
        #8f01ae 100%
      );
    }
  }
`;
