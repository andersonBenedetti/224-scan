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

export const RectOff = styled.rect`
  width: 150px;
  height: 7px;
  fill: ${({ theme }) => theme.colors.off_progress};
`;

export const RectFull = styled.rect`
  width: ${({ $progress }) => (($progress / 100) * 150) === 0 ? 20 : (($progress / 100) * 150)}px;
  height: 7px;
  fill: ${({ $progress, theme }) => $progress === 0 ? theme.colors.error : 'url(#grad2)'};
  transition: width 0.5s ease; 
`;

export const ProgressDetailsContainer = styled.div`
  color: ${({ theme }) => theme.colors.whiteOpacity};
  font-size: 0.75em;
  font-weight: 400;
`;
