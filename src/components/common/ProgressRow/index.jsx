import React from 'react';
import {
  LineFull,
  LineOff,
  RowContainer,
  ProgressDetailsContainer,
  SvgContainer,
} from './styles';

export const ProgressRow = ({ progressPercentage, children }) => {
  const safeProgress = Math.max(0, Math.min(100, progressPercentage));

  let progressDetailsContent;

  React.Children.forEach(children, child => {
    if (child.type === ProgressDetails) {
      progressDetailsContent = child;
    }
  });

  return (
    <RowContainer>
      <SvgContainer
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1500 70"
        width="150px"
        height="70px">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1120AC" stopOpacity="1" />
            <stop offset="100%" stopColor="#25A340" stopOpacity="1" />
          </linearGradient>
        </defs>
        <LineOff x1="0" y1="5" x2="1500" y2="5" />
        <LineFull x1="0" y1="5" x2="1500" y2="5" $progress={safeProgress} />
      </SvgContainer>
      {progressDetailsContent}
    </RowContainer>
  );
};

export const ProgressDetails = ({ children }) => (
  <ProgressDetailsContainer>{children}</ProgressDetailsContainer>
);
