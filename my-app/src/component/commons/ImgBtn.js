import styled from "styled-components";

const StyleImgBtn = styled.button`
    width: 400px;
    height: 56px;
    border-radius:10px;
    border:none;
    background-color:#EBD500;
`
const StyleLabel = styled.p`
    font-size: 20px;
    font-family: 'Noto Serif KR', serif;
    color:#FFFFFF;
    margin:0;
`

const ImgBtn = (props) =>{
    const {label,clickfuc} = props;
    return (
        <StyleImgBtn onClick={clickfuc}>
            <StyleLabel>{label}</StyleLabel>
        </StyleImgBtn>
    )
}

export default ImgBtn;