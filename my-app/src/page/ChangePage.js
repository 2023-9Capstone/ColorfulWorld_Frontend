import Header from "../component/header/Header";
import ChangeCard from "../component/change/ChangeCard";
import styled from "styled-components";
import ImgBtn from "../component/commons/ImgBtn";
import { Link } from "react-router-dom";

const StyleChange = styled.div`
height:800px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const ChangePage = () =>{

    return (
        <>
            <Header />
            <StyleChange>
                <ChangeCard/>
                <Link to="/result">
                    <ImgBtn label="RESULT"/>
                </Link>
            </StyleChange>
        </>
    )
}

export default ChangePage;
