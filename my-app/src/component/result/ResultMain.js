import React, { Suspense, useContext } from "react";
import imageContext from "../context/imageContext";
import styled from "styled-components";
import ResultSurveyCard from "./ResultSurveyCard";
import Ishihara1 from "../img/Ishihara_1.png";
import Ishihara2 from "../img/Ishihara_2.png";
import ErrorBoundary from "../../error/ErrorBoundary";
import ImgBtn from "../commons/ImgBtn";

const StyleContainer = styled.div`
  display: flex;
`;
const StyleResultImg = styled.img`
  width: 320px;
  height: 320px;
  margin: 30px;
  /* display: block; */
  /* margin: auto; */
`; //예전 이미지와 변환 이미지

const StyledSurvetAndBtn = styled.div`
  display: flex;
  flex-direction: column;
`;

/*fallback html 처리*/
const ResultMain = () => {
  const { image, setImage } = useContext(imageContext);
  console.log(image);
  return (
    <Suspense fallback={<div>asddddd</div>}>
      <ErrorBoundary fallback={<div>asd</div>}>
        <StyleContainer>
          <StyleResultImg src={Ishihara1}></StyleResultImg>
          <StyleResultImg src={Ishihara2}></StyleResultImg>
        </StyleContainer>
        <StyledSurvetAndBtn>
          <ResultSurveyCard />
          <ImgBtn label="DOWNLOAD" />
        </StyledSurvetAndBtn>
      </ErrorBoundary>
    </Suspense>
  );
};

export default ResultMain;
