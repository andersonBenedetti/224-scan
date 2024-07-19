import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Title = styled.p`
  font-size: 1.125em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const ContentBranch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Infos = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.p`
  font-size: 1em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const Text = styled.p`
  font-size: 0.75em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.whiteOpacity};
`;

export const Status = styled.p`
  font-size: 0.875em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.status};
  position: relative;
  padding-left: 6px;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.status};
    border-radius: 50%;
    top: 6px;
    left: 0;
  }
`;

export const Language = styled.p`
  font-size: 0.875em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textWhite};
  opacity: 0.8;
`;
