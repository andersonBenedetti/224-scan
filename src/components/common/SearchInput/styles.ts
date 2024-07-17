import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    background: none;
    opacity: 0.5;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  font-size: 0.875em;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.colorInput};
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 0.75em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.colorInput};

  &:focus {
    border-color: ${({ theme }) => theme.colors.textWhite};
    outline: none;
  }
`;
