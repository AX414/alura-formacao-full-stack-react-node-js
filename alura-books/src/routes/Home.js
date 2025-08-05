import Pesquisa from '../components/Pesquisa/Pesquisa';
import styled from 'styled-components';
import Lancamentos from './Lancamentos';

const HomeContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: transparent;
`

function Home() {
  return (
    <HomeContainer>
        <Pesquisa/>
        <Lancamentos/>
    </HomeContainer>
  );
}

export default Home;
