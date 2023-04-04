import Header from "../component/header/Header";
import IntroduceCard from "../component/IntroduceCard";
import FormBtn from "../component/commons/FormBtn";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyleBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

const MainPage = () => {
  const navigate = useNavigate();
  const gotochange = () => {
    navigate("/change");
  };
  return (
    <>
      <Header />
      <IntroduceCard />
      <StyleBtnContainer onClick={gotochange}>
        <FormBtn value="IMAGE" />
      </StyleBtnContainer>
    </>
  );
};

export default MainPage;
