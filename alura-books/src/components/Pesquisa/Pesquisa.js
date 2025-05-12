import styled from 'styled-components';
import Input from '../Input/Input';
import { useState } from "react";
import { livros } from './dadosPesquisa';
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
    // Valor inicial do estado é nada
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    return (
        <PesquisaContainer>
            <Titulo color="#FFF">Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante!</Subtitulo>
            <InputContainer>
                <Input
                    placeholder="Escreva o nome de um livro"
                    onChange={evento => {
                        const textoDigitado = evento.target.value;
                        const resultadoPesquisa = livros.filter(livro =>
                            livro.titulo.toLowerCase().includes(textoDigitado.toLowerCase())
                        );
                        setLivrosPesquisados(resultadoPesquisa);
                    }}
                />
            </InputContainer>
            <LivroGrid>
                {livrosPesquisados.map(livro => (
                    <Livro key={livro.id}>
                        <img src={livro.src} alt="Capa do livro" />
                        <p>{livro.titulo}</p>
                    </Livro>
                ))}
            </LivroGrid>
        </PesquisaContainer>
    )
}

export default Pesquisa;
