import styled from "styled-components";


const StyleFormBtn = styled.button`
width: 360px;
height: 44px;
background-color: #EBD500;
color:#FFFFFF;
border-radius:10px;
border:none;
font-size:16px;
font-family: 'Noto Sans KR', sans-serif;
`


const FormBtn = (props) =>{
    const {value} = props;
    return (
        <StyleFormBtn>{value}</StyleFormBtn>
    )
}

export default FormBtn;