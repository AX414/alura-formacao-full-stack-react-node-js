import styled from 'styled-components';
import { Link } from 'react-router-dom';

const items = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const LinkEstilizado = styled(Link)`
  text-decoration: none; 
  color: inherit;
`;

function ListaOpcoes() {
  return (
    <Opcoes>
      {items.map((texto) => (
        <LinkEstilizado key={texto} to={`/${texto.toLowerCase()}`}>
          <Opcao>
            <p>{texto}</p>
          </Opcao>
        </LinkEstilizado>
      ))}
    </Opcoes>
  );
}

export default ListaOpcoes;
