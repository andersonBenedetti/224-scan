import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  padding: 20px 0;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding: 0 20px;
  z-index: 99;
`;

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 180px;
  background-color: ${({ theme }) => theme.colors.backgroundSettings};
  padding: 50px 5px;
  border-radius: 10px;
  font-size: 1em;
  font-weight: 400;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    width: 31px;
    height: 31px;
    background-color: ${({ theme }) => theme.colors.backgroundDashboard};
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
`;

export const Option = styled.li`
  width: max-content;
  padding: 5px;
  font-size: 0.875em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textWhite};
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
    font-weight: 700;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 223px;
      height: 31px;
      background: url('/menu-settings.svg') no-repeat center center;
      background-size: contain;
      bottom: -2px;
      left: 0;
    }
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: end;
  gap: 5px;
  padding: 5px;
  font-size: 0.875em;
  font-weight: 400;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.textWhite};
  opacity: 0.8;
  transition: all 0.3s ease;

  svg path {
    stroke: ${({ theme }) => theme.colors.textWhite};
  }

  &:hover {
    opacity: 1;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 53vh;
  margin-right: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundSettings};
  padding: 40px 30px;
  border-radius: 10px;
  clip-path: polygon(
    0 0,
    calc(100% - 30px) 0,
    100% 30px,
    100% 100%,
    0 100%,
    0 0
  );
`;
