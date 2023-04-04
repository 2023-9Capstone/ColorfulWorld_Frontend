import React from "react";
import styled from "styled-components";
import OkBtn from "../commons/OkBtn";
import Ishihara1 from "../img/Ishihara_1.png";
import Ishihara2 from "../img/Ishihara_2.png";

const StyleSurveyCard = styled.div`
  width: 300px;
  height: 250px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const StyleSurveyText = styled.div`
  font-family: "Noto Serif KR", serif;
  align-items: center;
  text-align: center;
  line-height: 130px;

  color: #8a8a8a;
`;
const StyleContainer = styled.div`
  text-align: center;
`;
const StyleResultImg = styled.img`
  width: 400px;
  height: 400px;
  margin: 30px;
  /* display: block; */
  /* margin: auto; */
`;

const ResultSurveyCard = () => {
  return (
    <>
      <StyleContainer>
        <StyleResultImg src={Ishihara1}></StyleResultImg>
        <StyleResultImg src={Ishihara2}></StyleResultImg>
      </StyleContainer>
      <StyleSurveyCard>
        <StyleSurveyText>
          변환 결과가 어땠나요? &nbsp;알려주세요!
        </StyleSurveyText>
        <StyleContainer>
          <OkBtn value={"만족"}></OkBtn>
          <OkBtn value={"불만족"}></OkBtn>
        </StyleContainer>
      </StyleSurveyCard>
    </>
  );
};

export default ResultSurveyCard;
