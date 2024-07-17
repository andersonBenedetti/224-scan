import styled from 'styled-components';

export const RowContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SvgContainer = styled.svg`
  width: 150px;
  height: 7px;
`;

export const LineOff = styled.line`
  stroke: ${({ theme }) => theme.colors.borderTable};
  stroke-width: 70px;
  stroke-linecap: round;
`;

export const LineFull = styled.line`
  stroke: url(#grad1);
  stroke-width: 70px;
  stroke-dasharray: 150px;
  stroke-dashoffset: ${({ $progress }) => 150 - (150 * $progress) / 100};
  transition: stroke-dashoffset 0.5s ease;
  stroke-linecap: round;
`;

export const ProgressDetailsContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75em;
  font-weight: 400;
`;
