import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.ul`
  z-index: 999;
  display: flex;
  gap: 5px;
`;

export const Item = styled.li`
  background-color: transparent;
  padding: 1.5px 1.5px 0 1.5px;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  clip-path: polygon(
    0 0,
    calc(100% - 12px) 0,
    100% 12px,
    100% 100%,
    0 100%,
    0 0
  );
  opacity: 0.8;
  position: relative;

  &.active {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.colorButton};
    margin-bottom: -2px;

    span {
      font-weight: 600;
      border-bottom: 2px solid;
      border-color: ${({ theme }) => theme.colors.backgroundDashboard};
    }
  }
`;

export const Text = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.colors.backgroundDashboard};
  padding: 10px 20px 10px 20px;
  border-radius: 5px 5px 0 0;
  font-size: 0.875em;
  font-weight: 400;
  clip-path: polygon(
    0 0,
    calc(100% - 12px) 0,
    100% 12px,
    100% 100%,
    0 100%,
    0 0
  );
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDashboard};
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.colorButton};
  border-radius: 0px 10px 10px 10px;
  padding: 20px 0;
  min-height: 65vh;

  &::before {
    content: "";
    position: absolute;
    width: ${({ $overlay }) => $overlay.width}px;
    height: 10px;
    background: ${({ theme }) => theme.colors.backgroundDashboard};
    margin-top: -25px;
    left: ${({ $overlay }) => $overlay.left}px;
    z-index: 999;
  }
`;
