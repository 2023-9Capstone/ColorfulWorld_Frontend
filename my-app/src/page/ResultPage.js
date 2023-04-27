import React from "react";
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
