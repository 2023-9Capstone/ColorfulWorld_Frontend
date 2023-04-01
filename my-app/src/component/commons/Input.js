import styled from "styled-components";

const StyleInputBlock = styled.div`
    display:flex;
    flex-direction:column;
`

const StyleInput = styled.input`
    width:320px;
    height:44px;
    background-color:#FCFCFC;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding:0 12px;
    font-size:16px;
    font-family: 'Noto Serif KR', serif;
    margin-bottom:20px;
    &:focus{
        outline:none;
        border-color:#F0DD22;
    }
`

const StyleLabel = styled.label`
    font-size:12px;
    margin-bottom:12px;
    font-family: 'Noto Sans KR', sans-serif;
`

const Input = (props) =>{
    let {label,placeholder,type} = props
    return(
        <StyleInputBlock>
            <StyleLabel>{label}</StyleLabel>
            <StyleInput placeholder={placeholder} type={type}/>
        </StyleInputBlock>
    )
}

export default Input;