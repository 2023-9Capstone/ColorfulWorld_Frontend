import { useState } from "react";
import Header from "../component/header/Header";
import ChangeCard from "../component/change/ChangeCard";
import styled from "styled-components";
import ImgBtn from "../component/commons/ImgBtn";
import axios from "axios";
import { Link } from "react-router-dom";

const StyleChange = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChangePage = () => {
  const [imageUrl, setImageUrl] = useState();
  const getImageUrl = (image) => {
    setImageUrl(() => image);
  };

  return (
    <>
      <Header />
      <StyleChange>
        <ChangeCard getImageUrl={getImageUrl} />
        <Link to={`/result/${imageUrl}`}>
          <ImgBtn label="RESULT" />
        </Link>
      </StyleChange>
    </>
  );
};

export default ChangePage;
