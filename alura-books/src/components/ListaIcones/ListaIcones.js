import perfil from '../../assets/imgs/perfil.svg';
import sacola from '../../assets/imgs/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola];
const Itens = styled.ul`
    display: flex;
    align-items: center;
`
const Item = styled.li`
    margin-right: 40px;
    width: 25px;
`
function ListaIcones(){
    return(
        <Itens>
          {icones.map((icone)=>(
          <Item>
            <img src={icone} alt="icone"/>
          </Item>
          ))}
        </Itens>
    )
}

export default ListaIcones;