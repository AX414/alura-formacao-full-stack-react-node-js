import styled from "styled-components";

const InputContainer = styled.input`
        border: 1px solid #FFF;
        background: transparent;
        border: 1px solid #FFF;
        padding: 20px 140px;
        border-radius: 50px;
        width: 200px;
        color: #FFF;
        font-size: 16px;
        margin-bottom: 10px;

        &::placeholder {
                color: white;
                font-size: 16px;
        }
`
function Input() {
        return (
                <InputContainer/>
        )
}
export default Input;