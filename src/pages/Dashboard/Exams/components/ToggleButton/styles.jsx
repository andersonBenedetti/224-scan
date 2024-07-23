import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
  width: fit-content;
  display: flex;
  align-items: end;
  gap: 5px;
  z-index: 99999999;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.52px;
  opacity: 0.8;
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 21px;
  background-color: ${({ theme }) => theme.colors.toggleButton};
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const ToggleInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    &::before {
      transform: translateX(19px);
      background-color: ${({ theme }) => theme.colors.toggleActive};
    }
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  border-radius: 50px;
  transition: background-color 0.3s;
  &::before {
    content: '';
    position: absolute;
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: ${({ theme }) => theme.colors.translucentWhite};
    transition: transform 0.3s, background-color 0.3s;
    border-radius: 50%;
  }
`;
