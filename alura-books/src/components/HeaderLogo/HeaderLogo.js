import logo from '../../assets/imgs/logo.svg';
import styled from 'styled-components';

const Logo = styled.div`
    display: flex;
    font-size: 30px;
    margin-right: 10px;
`

const Imagem = styled.img`
  margin-right: 10px;
`

function HeaderLogo(){
    return(
        <Logo>
          <Imagem src ={logo} alt='logo'/>
          <p><strong>Alura</strong>Books</p>
        </Logo>
    )
}

export default HeaderLogo;