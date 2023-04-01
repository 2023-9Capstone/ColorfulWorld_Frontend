import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleLoginBtn = styled.p`
font-family: 'Noto Serif KR', serif;
margin:0;
font-size:20px;
font-weight:bold;
color:#F0DD22;
`

const HeaderLoginBtn = () =>{
    return(
        <Link to="/login">
            <StyleLoginBtn>LOGIN</StyleLoginBtn>
        </Link>
    )
}

export default HeaderLoginBtn