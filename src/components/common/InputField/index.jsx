import { Input } from './styles';

export default function InputField({
  type = 'text',
  placeholder,
  value,
  onChange,
}) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
