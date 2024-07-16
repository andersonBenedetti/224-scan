import React from 'react';

import {
  CircleFull,
  CircleOff,
  CirlesContainer,
  ProgressContainer,
  ProgressDetailsContainer,
  SvgContainer,
} from './styles';

export const ProgressCircle = ({ progressPercentage, children }) => {
  const safeProgress = Math.max(0, Math.min(100, progressPercentage));

  let progressTitle;
  let progressDetailsContent;

  React.Children.forEach(children, child => {
    if (child.type === Progress) {
      progressTitle = child;
    } else if (child.type === ProgressDetails) {
      progressDetailsContent = child;
    }
  });

  return (
    <CirlesContainer>
      <SvgContainer xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop
              offset="0%"
              style={{ stopColor: '#1120AC', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#25A340', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <CircleOff cx="60" cy="60" r="55" />
        <CircleFull cx="60" cy="60" r="55" $progress={safeProgress} />
      </SvgContainer>
      {progressTitle}
      {progressDetailsContent}
    </CirlesContainer>
  );
};

export const Progress = ({ children }) => (
  <ProgressContainer>{children}</ProgressContainer>
);

export const ProgressDetails = ({ children }) => (
  <ProgressDetailsContainer>{children}</ProgressDetailsContainer>
);
