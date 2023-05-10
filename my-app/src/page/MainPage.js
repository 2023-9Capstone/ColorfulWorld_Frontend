import Header from "../component/header/Header";
import IntroduceCard from "../component/main/IntroduceCard";
import FormBtn from "../component/commons/FormBtn";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const StyleMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyleBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

const MainPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState();

  //페이지 렌더링 시에 로그인이 안 되어 있을 경우 로그인 페이지로 이동
  // useEffect(() => {
  //   setIsLogin(localStorage.getItem("loginState"));
  //   if (isLogin === null) navigate("/login");
  // }, [isLogin]);

  const gotochange = () => {
    navigate("/change");
  };
  return (
    <>
      <Header />
      <StyleMain>
        <IntroduceCard />
        <FormBtn ClickFun={gotochange} value="IMAGE" />
      </StyleMain>
    </>
  );
};

export default MainPage;
