import { FiSearch } from 'react-icons/fi';

import { Container, Content } from "./style";

import { SearchInput } from '../../components/SearchInput';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

export function Search(){
  return (
    <Container>
      <main>
        
        <h1>Buscar</h1>
        <p>Selecione um tribunal para listar os processos ou buscar pelo número unificado.</p>

        <Content>
          <SearchInput placeholder="Número do processo" icon={FiSearch} />
          <Button title="Buscar" />
        </Content>

        <Link to="/show">Botão teste página 2</Link>
      </main>
    </Container>
  );
}