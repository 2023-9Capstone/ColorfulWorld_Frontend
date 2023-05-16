import styled from "styled-components";
import OkBtn from "../commons/OkBtn";
import axios from "axios";
import { GetImgUrlToFile } from "../../utils/GetImgUrlToFile";
import { BaseUrl } from "../../utils/ImageChange";

const StyledResultSurveyCard = styled.section`
  width: 400px;
  height: 140px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 25px;
`;

const StyledResultSurveyText = styled.div`
  width: 300px;
  height: 60px;
  font-family: "Noto Serif KR", serif;
  font-size: 20px;
  text-align: center;
  color: #8a8a8a;
`;

const StyledResultSurveyBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
  height: 40px;
`;

const ResultSurveyCard = () => {
  const imageSatisfied = () => {};
  return (
    <StyledResultSurveyCard>
      <StyledResultSurveyText>
        변환된 이미지가 만족시킨다면,
        <br />
        아래 버튼을 클릭해 주세요!
      </StyledResultSurveyText>
      <StyledResultSurveyBtn>
        <OkBtn value={"만족"} onClick={imageSatisfied} />
        <OkBtn value={"불만족"} />
      </StyledResultSurveyBtn>
    </StyledResultSurveyCard>
  );
};

export default ResultSurveyCard;
