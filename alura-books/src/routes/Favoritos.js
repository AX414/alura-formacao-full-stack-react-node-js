import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa/Pesquisa';

const FavoritosContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: transparent;
`

function Favoritos() {
  return (
    <FavoritosContainer>
      <Pesquisa/>
    </FavoritosContainer>
  );
}

export default Favoritos;
