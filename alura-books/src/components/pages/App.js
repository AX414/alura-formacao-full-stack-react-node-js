import React from 'react';
import Header from '../Header/Header';
import Pesquisa from '../Pesquisa/Pesquisa';
import styled from 'styled-components';
import Lancamentos from '../Lancamentos/Lancamentos';

const AppContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    background: transparent;
`

function App() {
  return (
    <AppContainer>
        <Header/>
        <Pesquisa/>
        <Lancamentos/>
    </AppContainer>
  );
}

export default App;
