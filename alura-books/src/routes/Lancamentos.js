import styled from "styled-components";
import iconeLivro from '../assets/imgs/livro.png'
import { Titulo } from "../components/Titulo/Titulo";
import CardRecomendacao from "../components/CardRecomendacao/CardRecomendacao";

const LancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosGrid = styled.div`
        display: grid;
        margin: 50px 50px;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Grid responsivo */
        gap: 20px; /* Espaço entre os itens */
        padding: 0 20px; /* Padding para garantir que o conteúdo não encoste nas bordas */
        align-items: center;
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

function Lancamentos() {

    const livros = [
        { titulo: 'Liderança em Design', id: 1, src: iconeLivro },
        { titulo: 'Javascript Assertivo', id: 2, src: iconeLivro },
        { titulo: 'Cangaceiro em Javascript', id: 3, src: iconeLivro },
        { titulo: 'Aventureiros em Java', id: 4, src: iconeLivro },
    ]

    return (
        <LancamentosContainer>
            <Titulo color="#EB9B00">ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosGrid>
                {livros.map(livro => (
                    <Livro key={livro.id}>
                        <img src={livro.src} alt="Capa do livro" />
                        <p>{livro.titulo}</p>
                    </Livro>
                ))}
            </NovosLivrosGrid>
            <CardRecomendacao
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={iconeLivro}
            />
        </LancamentosContainer>
    );
}

export default Lancamentos;