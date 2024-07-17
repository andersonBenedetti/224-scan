import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.colorButton};
  border: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 0.875em;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  padding: 1.5px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 5px;
  }
`;
