import styled from 'styled-components';
import Input from '../Input/Input';
import { useState, useEffect } from "react";
import { getLivros } from '../../services/livros'
import { Titulo } from '../Titulo/Titulo';


const PesquisaContainer = styled.section`
        background: transparent;
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const InputContainer = styled.div`
        margin-bottom: 40px;
`

const LivroGrid = styled.div`
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

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])


    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        try {
            const livrosDaAPI = await getLivros();
            console.log('Livros recebidos:', livrosDaAPI); // Veja no console
            setLivros(livrosDaAPI);
        } catch (error) {
            console.error('Erro ao buscar livros:', error.response?.data || error.message);
        }
    }

    return (
        <PesquisaContainer>
            <Titulo color="#FFF">Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante!</Subtitulo>
            <InputContainer>
                <Input
                    placeholder="Escreva sua próxima leitura"
                    onChange={evento => {
                        const textoDigitado = evento.target.value.toLowerCase();

                        if (textoDigitado.trim() === '') {
                            setLivrosPesquisados([]); // Limpa os resultados se o campo estiver vazio
                            return;
                        }

                        const resultadoPesquisa = livros.filter(livro =>
                            livro.nome.toLowerCase().includes(textoDigitado)
                        );
                        setLivrosPesquisados(resultadoPesquisa);
                    }}
                />
            </InputContainer>
            {livrosPesquisados.length > 0 && (
                <LivroGrid>
                    {livrosPesquisados.map(livro => (
                        <Livro key={livro.id}>
                            <p>{livro.nome}</p>
                        </Livro>
                    ))}
                </LivroGrid>
            )}
        </PesquisaContainer>
    )
}

export default Pesquisa;
