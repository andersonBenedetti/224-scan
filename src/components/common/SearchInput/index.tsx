import { SearchIcon } from '@/components/icons/SearchIcon';
import { Container, Input, IconWrapper } from './styles';

export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <Container>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </Container>
  );
}
