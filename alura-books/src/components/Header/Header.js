import HeaderLogo from '../HeaderLogo/HeaderLogo';
import ListaOpcoes from '../ListaOpcoes/ListaOpcoes';
import ListaIcones from '../ListaIcones/ListaIcones';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

const LinkEstilizado = styled(Link)`
  text-decoration: none; 
  color: inherit;
`;

function Header(){
    return (
        <HeaderContainer>
            <LinkEstilizado to="/">
                <HeaderLogo/>
            </LinkEstilizado>
            <ListaOpcoes/>
            <ListaIcones/>
        </HeaderContainer>
    )
}

export default Header;