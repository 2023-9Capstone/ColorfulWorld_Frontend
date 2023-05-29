import React, { Suspense, lazy } from "react";
import { useContext } from "react";
import { ImageContext } from "../App";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "../error/ErrorBoundary";
import ImageChange from "../utils/async/ImageChange";
import styled from "styled-components";
import Header from "../component/header/Header";
const ResultMain = lazy(() => import("../component/result/ResultMain"));

const StyledResult = styled.div`
  display: flex;
  height: 800px;
  align-items: center;
  justify-content: center;
`;

const ResultPage = () => {
  const { image } = useContext(ImageContext);
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("loginState");
  //페이지 렌더링 시에 로그인이 안 되어 있을 경우 로그인 페이지로 이동
  // useEffect(() => {
  //   if (!isLogin) navigate("/login");
  // }, [isLogin]);
  return (
    <>
      <Header />
      <ErrorBoundary fallback={<div>Loading...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <StyledResult>
            <ResultMain Resource={ImageChange(image)} />
          </StyledResult>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ResultPage;
