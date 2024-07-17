import styled from 'styled-components';

export const CirlesContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SvgContainer = styled.svg`
  width: 120px;
  height: 120px;
  position: absolute;
  transform: rotate(140deg);
`;

export const CircleFull = styled.circle`
  fill: none;
  stroke-linecap: round;
  stroke-width: 4;
  stroke: url(#grad1);
  stroke-dasharray: 350;
  stroke-dashoffset: ${({ $progress }) => 350 - (251 * $progress) / 100};
  transition: stroke-dashoffset 0.5s ease;
`;

export const CircleOff = styled.circle`
  fill: none;
  stroke-linecap: round;
  stroke-width: 3;
  stroke: ${({ theme }) => theme.colors.off_progress};
  stroke-dasharray: 251.2;
  stroke-dashoffset: 0;
`;

export const ProgressContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: 300;
  z-index: 1;
`;

export const ProgressDetailsContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 10px;
  font-weight: 300;
  z-index: 1;
`;
