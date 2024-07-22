import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonBottom = styled.a`
  display: block;
  font-size: 0.875em;
  font-weight: 600;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textLink};
  text-align: center;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.whiteOpacity};
  }
`;
