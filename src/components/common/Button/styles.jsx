import styled, { keyframes } from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 0.875em;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1.5px;
  background-size: 200% auto;
  overflow: hidden;
  background-image: linear-gradient(
    to right,
    #c833e8 0%,
    #c833e8 51%,
    #8f01ae 100%
  );
  transition: all 0.5s ease-in;

  &:hover {
    background-position: right center;
  }

  &.bordered {
    background: linear-gradient(#12101a, #12101a) padding-box,
      linear-gradient(to right, #09b250, #09b250, #10467b) border-box;
    border: 1px solid transparent;
    background-size: 200% auto;

    &:hover {
      background-image: linear-gradient(
        to right,
        #09b250 0%,
        #09b250 51%,
        #10467b 100%
      );
      border: transparent;
      background-position: right center;
    }
  }
`;
