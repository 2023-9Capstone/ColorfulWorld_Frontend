import React from "react";
import ImageChange from "./ImageChange";
import styled from "styled-components";
import { BaseUrl } from "./ImageChange";

const StyleImg = styled.img`
  width: 320px;
  height: auto;
  margin-right: 80px;
`;

const resource = ImageChange();

const ResultContainer = () => {
  const image = resource.image.read();
  const imageUrl = window.location.href;
  const fetchUrl =
    "blob:" +
    window.location.origin +
    imageUrl.substring(imageUrl.lastIndexOf("/"), imageUrl.length);
  console.log(image);
  return (
    <>
      <StyleImg src={fetchUrl} alt="test" />
      <StyleImg src={BaseUrl + image} alt="test" />
    </>
  );
};

export default ResultContainer;
