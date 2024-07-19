import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.875em;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.colorInput};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 0.875em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.colorInput};

  &:focus {
    background-color: ${({ theme }) => theme.colors.backgroundDashboard};
    border-color: ${({ theme }) => theme.colors.textWhite};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  resize: none;
  padding: 10px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.colorInput};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 0.875em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.colorInput};

  &:focus {
    background-color: ${({ theme }) => theme.colors.backgroundDashboard};
    border-color: ${({ theme }) => theme.colors.textWhite};
    outline: none;
  }
`;

export const IconWrapper = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.colorInput};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.colorInput};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 0.875em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.colorInput};

  &:focus {
    border-color: ${({ theme }) => theme.colors.textWhite};
    outline: none;
  }

  option {
    background-color: ${({ theme }) => theme.colors.backgroundDashboard};
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
