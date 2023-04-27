import styled from "styled-components";
import OkBtn from "../commons/OkBtn";

const StyledResultSurveyCard = styled.section`
  width: 400px;
  height: 320px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;
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
  margin-top: 20px;
  width: 240;
  height: 100px;
`;

const ResultSurveyCard = () => {
  return (
    <StyledResultSurveyCard>
      <StyledResultSurveyText>
        변환된 이미지가 만족시킨다면,
        <br />
        아래 버튼을 클릭해 주세요!
      </StyledResultSurveyText>
      <StyledResultSurveyBtn>
        <OkBtn value={"만족"}></OkBtn>
        <OkBtn value={"불만족"}></OkBtn>
      </StyledResultSurveyBtn>
    </StyledResultSurveyCard>
  );
};

export default ResultSurveyCard;
