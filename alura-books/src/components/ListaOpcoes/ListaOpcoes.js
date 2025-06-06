import styled from 'styled-components';

const items = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const Opcoes = styled.ul`
    display:flex;
`
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
`

function ListaOpcoes(){
    return(
        <Opcoes>
          {items.map((opcao) => (
            <Opcao key={opcao}>
              <p>{opcao}</p>
            </Opcao>
          ))}
        </Opcoes>
    )
}

export default ListaOpcoes;