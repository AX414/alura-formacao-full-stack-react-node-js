import './ListaIcones.css';
import perfil from '../../assets/imgs/perfil.svg';
import sacola from '../../assets/imgs/sacola.svg';

const icones = [perfil, sacola];

function ListaIcones(){
    return(
        <ul className='App-list-icons'>
          {icones.map((icone)=>(
            <li className='App-list-icon'>
            <img src={icone}></img>
          </li>
          ))}
        </ul>
    )
}

export default ListaIcones;