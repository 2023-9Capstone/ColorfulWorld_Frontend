import Header from "../component/header/Header";
import JoinCard from "../component/join/JoinCard";
import styled from "styled-components";

const StyleLogin = styled.div`
  height: 1150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginPage = () => {
  return (
    <>
      <Header />
      <StyleLogin>
        <JoinCard />
      </StyleLogin>
    </>
  );
};

export default LoginPage;
