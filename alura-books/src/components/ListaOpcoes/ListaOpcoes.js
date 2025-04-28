import './ListaOpcoes.css';

const items = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']


function ListaOpcoes(){
    return(
        <ul className='App-list'>
          {items.map((opcao) => (
            <li className='App-list-item'>
              <p>{opcao}</p>
            </li>
          ))}
        </ul>
    )
}

export default ListaOpcoes;