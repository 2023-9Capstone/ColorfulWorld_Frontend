import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleHomeBtn = styled.p`
font-family: 'Noto Serif KR', serif;
margin:0;
font-size:32px;
font-weight:bold;
color:#F0DD22;
margin-left:40px;
`


const HeaderHomeBtn = () =>{//누르면 main으로 간다. 
    return (
        <Link to="/">
        <StyleHomeBtn>Colorful World</StyleHomeBtn>
        </Link>
    )
}

export default HeaderHomeBtn