import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  font-size: 0.875em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textWhite};
  opacity: 0.6;
  padding: 20px 10px;
`;

export const Tr = styled.tr`
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.colors.borderTable};
`;

export const Td = styled.td`
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.colors.borderTable};
  padding: 20px 10px;
`;
