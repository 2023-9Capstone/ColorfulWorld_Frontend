import { useState, useEffect } from "react";
import Header from "../component/header/Header";
import ChangeCard from "../component/change/ChangeCard";
import styled from "styled-components";
import ImgBtn from "../component/commons/ImgBtn";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
  const clickfuc = () => {
    if (!imageUrl) {
      alert("이미지를 업로드 해주세요!");
      return;
    }
    navigate(`/result/${imageUrl}`);
  };

  return (
    <>
      <Header />
      <StyleChange>
        <ChangeCard getImageUrl={setImageUrl} />
        <ImgBtn label="RESULT" clickfuc={clickfuc} />
      </StyleChange>
    </>
  );
};

export default ChangePage;
