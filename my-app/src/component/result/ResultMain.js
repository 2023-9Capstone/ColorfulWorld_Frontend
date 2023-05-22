import React, { Suspense, lazy, useState } from "react";
import styled from "styled-components";
import ImageChange from "../../utils/ImageChange";
import ErrorBoundary from "../../error/ErrorBoundary";
const ImgBtn = lazy(() => import("../commons/ImgBtn"));
const ResultImgContainer = lazy(() => import("./ResultImgContainer"));
const ResultSurveyCard = lazy(() => import("./ResultSurveyCard"));

const StyledSurvetAndBtn = styled.div`
  display: flex;
  flex-direction: column;
`;

/*fallback html 처리*/
const ResultMain = () => {
  const [image, setImage] = useState();
  const imageDownload = () => {};
  return (
    <ErrorBoundary fallback={<div>Loading...</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <ResultImgContainer Resource={ImageChange()} />
        <StyledSurvetAndBtn>
          <ResultSurveyCard />
          <ImgBtn label="DOWNLOAD" onClick={imageDownload} />
        </StyledSurvetAndBtn>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ResultMain;
