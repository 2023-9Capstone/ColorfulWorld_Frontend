import React, { lazy } from "react";
import styled from "styled-components";
import { BaseUrl } from "../../utils/SubmitUrl";
const ImgBtn = lazy(() => import("../commons/ImgBtn"));
const ResultSurveyCard = lazy(() => import("./ResultSurveyCard"));

const StyledSurvetAndBtn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleImg = styled.img`
  width: 320px;
  height: auto;
  margin-right: 80px;
`;

/*fallback html 처리*/
const ResultMain = ({ Resource }) => {
  const imageUrl = Resource.image.read();
  const imageDownload = () => {
    let link = document.createElement("a");
    link.href = URL.createObjectURL(imageUrl);
    link.download = imageUrl.name;
    link.click();
  };
  return (
    <>
      <StyleImg src={URL.createObjectURL(imageUrl)} alt="transfer" />
      <StyledSurvetAndBtn>
        <ResultSurveyCard />
        <ImgBtn label="DOWNLOAD" clickfuc={imageDownload} />
      </StyledSurvetAndBtn>
    </>
  );
};

export default ResultMain;
