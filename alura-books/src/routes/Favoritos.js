import { useEffect, useState } from 'react';
import styled from 'styled-components'
import iconeLivro from '../assets/imgs/livro.png'
import { getFavoritos } from '../services/favoritos'
import { deleteFavorito } from '../services/favoritos';

const AppContainer = styled.div`
        width: 100vw;
        height: 100vh;
    `

const LivroGrid = styled.div`
        margin-top: 15%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Grid responsivo */
        gap: 20px; /* Espaço entre os itens */
        padding: 0 20px; /* Padding para garantir que o conteúdo não encoste nas bordas */
`

const Livro = styled.div`
        background: transparent; /* garante que não vai ficar branco */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        p {
            color: black;
            width: 70%;
            background-color: #FFF;
            border-radius: 25px;
            text-align: center;
            justify-content: center;
            justify-items: center;
            padding: 10px;
        }
        p:hover {
            color: white;
            background-color: grey;
        }

        img {
            width: 100%; /* Ajusta a largura da imagem de acordo com o espaço */
            max-width: 75%; /* Limita a largura máxima da imagem */
        }
`

function Favoritos() {
    const [favoritos, setFavoritos] = useState([])

    async function fetchFavoritos() {
        const favoritosDaAPI = await getFavoritos()
        setFavoritos(favoritosDaAPI)
    }


    useEffect(() => {
        fetchFavoritos()
    }, [])


    async function deletarFavorito(id) {
        try {
            await deleteFavorito(id)
            alert(`Livro de id:${id} deletado!`)
            await fetchFavoritos()
        } catch (error) {
            console.error('Erro excluir livro da lista de favoritos:', error.response?.data || error.message);
        }
    }

    return (
        <AppContainer>
            {favoritos.length > 0 && (
                <LivroGrid>
                    {favoritos.map(livro => (
                        <Livro key={livro.id} onClick={() => deletarFavorito(livro.id)}>
                            <img src={iconeLivro} alt="Capa do livro" />
                            <p>{livro.nome}</p>
                        </Livro>
                    ))}
                </LivroGrid>
            )}
        </AppContainer>
    );
}

export default Favoritos