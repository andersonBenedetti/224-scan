import { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import {
  Container,
  ContainerInput,
  Input,
  Label,
  IconWrapper,
  Select,
} from './styles';

export default function FormField({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  id,
  required = false,
  options = [],
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <ContainerInput>
        {type === 'select' ? (
          <Select id={id} value={value} onChange={onChange} required={required}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        ) : (
          <>
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
          </>
        )}
      </ContainerInput>
    </Container>
  );
}
