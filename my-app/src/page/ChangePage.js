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
  /*const image = useContext(imageContext);
  const onClick = () => {
    console.log(image.images);
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0amd1czU5MzVAZ21haWwuY29tIiwiaWF0IjoxNjgzNjEwNDY1LCJleHAiOjE2ODM2MTIyNjUsInR5cGUiOiJhY2Nlc3MifQ.JQz8u0-ZEYvl_cIQWXg9wROzc-9vAgMvC-zF2RZn0HTg_OIMOT-FCK-S_gfNbgCo";
    const formData = new FormData();
    formData.append("image", image.images);
    axios.post("http://172.16.61.131:8080/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: token,
      },
    });
  };*/
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
