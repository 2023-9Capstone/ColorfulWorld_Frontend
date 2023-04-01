import Header from "../component/header/Header";
import LoginCard from "../component/login/LoginCard";
import styled from "styled-components";

const StyleLogin = styled.div`
height:800px;
display:flex;
align-items:center;
justify-content:center;
`


const LoginPage = () =>{

    return (
        <>
            <Header />
            <StyleLogin>
                <LoginCard/>
            </StyleLogin>
        </>
    )
}

export default LoginPage;