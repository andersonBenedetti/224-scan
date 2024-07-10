import { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import { Container, ContainerInput, Input, Label, IconWrapper } from './styles';

export default function FormField({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  id,
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <ContainerInput>
        <Input
          type={type === 'password' && showPassword ? 'text' : type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
        {type === 'password' && (
          <IconWrapper onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </IconWrapper>
        )}
      </ContainerInput>
    </Container>
  );
}
