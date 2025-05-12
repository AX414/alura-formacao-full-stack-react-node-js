import styled from "styled-components";


export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: ${props=> props.bcolor || "none"};
    color: ${props=> props.color || "#EB9B00"};
    font-size: ${props=> props.fsize || "36px"};
    text-align: ${props=> props.align || "center"};
    margin: 0 0 20px 0;
`;

