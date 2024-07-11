import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.backgroundDashboard};
  padding: 10px;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
`;

export const Content = styled.div``;
