import HeaderLogo from '../HeaderLogo/HeaderLogo';
import ListaOpcoes from '../ListaOpcoes/ListaOpcoes';
import ListaIcones from '../ListaIcones/ListaIcones';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return (
        <HeaderContainer>
            <HeaderLogo/>
            <ListaOpcoes/>
            <ListaIcones/>
        </HeaderContainer>
    )
}

export default Header;