import { FiSearch } from 'react-icons/fi';
import { Container } from './style';
import { Link } from 'react-router-dom';

import { SearchInput } from '../SearchInput';
import { Button } from '../Button';

export function HeaderSearch() {
  return(
    <Container>
      <Link to="/">Home</Link>
      <div>
        <SearchInput placeholder="Número do processo" icon={FiSearch}/>
        <Button title="Buscar"/>
      </div>
     
    </Container>
  );
}