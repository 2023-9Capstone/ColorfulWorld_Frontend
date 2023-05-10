import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import ErrorBoundary from "../../error/ErrorBoundary";
const ImgBtn = lazy(() => import("../commons/ImgBtn"));
const ResultContainer = lazy(() => import("./ResultContainer"));
const ResultSurveyCard = lazy(() => import("./ResultSurveyCard"));

const StyledSurvetAndBtn = styled.div`
  display: flex;
  flex-direction: column;
`;

/*fallback html 처리*/
const ResultMain = () => {
  return (
    <ErrorBoundary fallback={<div>Loading...</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <ResultContainer />
        <StyledSurvetAndBtn>
          <ResultSurveyCard />
          <ImgBtn label="DOWNLOAD" />
        </StyledSurvetAndBtn>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ResultMain;
