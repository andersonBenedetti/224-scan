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
  transition: background-position 0.6s ease, background-image 0.6s ease,
    border 0.6s ease;

  &:hover {
    background-position: right center;
  }

  &.bordered {
    background: linear-gradient(#12101a, #12101a) padding-box,
      linear-gradient(to right, #09b250, #09b250, #10467b) border-box;
    border: 1px solid transparent;
    transition: background-position 0.6s ease, background-size 0.6s ease,
      border 0.6s ease;

    &:hover {
      background-size: 200% auto;
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
