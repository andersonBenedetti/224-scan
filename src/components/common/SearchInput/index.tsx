import { SearchIcon } from '@/components/icons/SearchIcon';
import { Container, ContainerInput, Label, Input } from './styles';

export default function SearchInput({
  label,
  id,
  value,
  onChange,
  placeholder,
}) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <ContainerInput>
        <Input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <SearchIcon />
      </ContainerInput>
    </Container>
  );
}
