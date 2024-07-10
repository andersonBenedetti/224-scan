import { Container, Input, Label } from './styles';

export default function FormField({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  id,
  required = false,
}) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </Container>
  );
}
