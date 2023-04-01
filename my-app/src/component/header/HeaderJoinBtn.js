import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleJoinBtn = styled.p`
font-family: 'Noto Serif KR', serif;
margin:0;
font-size:20px;
font-weight:bold;
color:#F0DD22;

`

const HeaderJoinBtn = () =>{
    return(
        <Link to="/join">
        <StyleJoinBtn>JOIN</StyleJoinBtn>
        </Link>
    )
}

export default HeaderJoinBtn