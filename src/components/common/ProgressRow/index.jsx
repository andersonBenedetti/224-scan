import React from 'react';
import {
  RectOff,
  RectFull,
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
      <SvgContainer xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#00FF38', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1A237C', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <RectOff rx="3.5" />
        <RectFull rx="3.5" $progress={safeProgress} />
      </SvgContainer>
      {progressDetailsContent}
    </RowContainer>
  );
};

export const ProgressDetails = ({ children }) => (
  <ProgressDetailsContainer>{children}</ProgressDetailsContainer>
);
