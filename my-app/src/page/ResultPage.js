import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../component/header/Header";
import ResultMain from "../component/result/ResultMain";
const StyledResult = styled.div`
  display: flex;
  height: 800px;
  align-items: center;
  justify-content: center;
`;

const ResultPage = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("loginState");
  //페이지 렌더링 시에 로그인이 안 되어 있을 경우 로그인 페이지로 이동
  // useEffect(() => {
  //   if (!isLogin) navigate("/login");
  // }, [isLogin]);
  return (
    <>
      <Header />
      <StyledResult>
        <ResultMain />
      </StyledResult>
    </>
  );
};

export default ResultPage;
