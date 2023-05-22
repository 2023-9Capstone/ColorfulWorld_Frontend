import { useState } from "react";
import Header from "../component/header/Header";
import ChangeCard from "../component/change/ChangeCard";
import styled from "styled-components";
import ImgBtn from "../component/commons/ImgBtn";
import { useNavigate } from "react-router-dom";

const StyleChange = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChangePage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const goToResultAndImgAsync = () => {
    //RESULT 버튼 클릭시 PROMISE 비동기.
    navigate(`/result/${imageUrl}`);
  };
  return (
    <>
      <Header />
      <StyleChange>
        <ChangeCard getImageUrl={setImageUrl} />
        <ImgBtn label="RESULT" clickfuc={goToResultAndImgAsync} />
      </StyleChange>
    </>
  );
};

export default ChangePage;
