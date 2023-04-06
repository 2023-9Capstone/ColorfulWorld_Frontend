import Header from "../component/header/Header";
import ChangeCard from "../component/change/ChangeCard";
import styled from "styled-components";


const StyleChange = styled.div`
height:800px;
display:flex;
align-items:center;
justify-content:center;
`

const ChangePage = () =>{

    return (
        <>
            <Header />
            <StyleChange>
                <ChangeCard/>
            </StyleChange>
        </>
    )
}

export default ChangePage;
