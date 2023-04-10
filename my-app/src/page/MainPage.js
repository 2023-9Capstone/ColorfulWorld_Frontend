import Header from "../component/header/Header";
import IntroduceCard from "../component/main/IntroduceCard";
import FormBtn from "../component/commons/FormBtn";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyleMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyleBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

const MainPage = () => {
  //FormBtn은 Component이기 때문에 onClick이 되지 않아서 props로 넘겼습니다!!
  const navigate = useNavigate();
  //로그인 확인할 때 사용하면 사용자를 구분하면 좋을거 같아요!
  const gotochange = () => {
    navigate("/change");
  };
  return (
    <>
      <Header />
      <StyleMain>
        <IntroduceCard />
        <FormBtn ClickFun={gotochange} value="IMAGE" />
      </StyleMain>
    </>
  );
};

export default MainPage;
