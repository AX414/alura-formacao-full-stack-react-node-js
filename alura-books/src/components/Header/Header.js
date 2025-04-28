import './Header.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import ListaOpcoes from '../ListaOpcoes/ListaOpcoes';
import ListaIcones from '../ListaIcones/ListaIcones';

function Header(){
    return (
        <header className='App-header'>
            <HeaderLogo/>
            <ListaOpcoes/>
            <ListaIcones/>
        </header>
    )
}

export default Header;