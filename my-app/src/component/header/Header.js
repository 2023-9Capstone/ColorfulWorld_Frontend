import styled from "styled-components";
import HomeBtn from "./HeaderHomeBtn";
import LoginBtn from "./HeaderLoginBtn";
import JoinBtn from "./HeaderJoinBtn";

const StyleHeader = styled.header`
width:100%;
height:70px;
background-color:#FFFFFF;
display:flex;
align-items:center;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
justify-content:space-between;
.LoginJoin{
    display:flex;
    align-items:center;
    width:150px;
    justify-content:space-between;
    margin-right:50px;
}
`

const Header = () =>{
    return (
        <StyleHeader>
            <HomeBtn/>
            <div className="LoginJoin">
                <LoginBtn/>
                <JoinBtn/>
            </div>
        </StyleHeader>
    )
}

export default Header