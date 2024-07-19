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
  text-align: end;
  text-decoration: underline;
`;

export const Text = styled.p`
  width: 100%;
  font-size: 0.875em;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textWhite};
  opacity: 0.5;
  text-align: center;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    width: 45%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.textWhite};
  }

  &::before {
    left: 0;
  }

  &:after {
    right: 0;
  }
`;
