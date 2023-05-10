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
  const imageDownload = () => {};
  return (
    <ErrorBoundary fallback={<div>Loading...</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <ResultContainer />
        <StyledSurvetAndBtn>
          <ResultSurveyCard />
          <ImgBtn label="DOWNLOAD" onClick={imageDownload} />
        </StyledSurvetAndBtn>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ResultMain;
