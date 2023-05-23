import React, { useEffect } from "react";
import styled from "styled-components";
import { fetchUrl } from "../../utils/SubmitUrl";
import { BaseUrl } from "../../utils/SubmitUrl";

const StyleImg = styled.img`
  width: 320px;
  height: auto;
  margin-right: 80px;
`;

//const resource = ImageChange();

const ResultImgContainer = ({ Resource, setImage }) => {
  const image = Resource.image.read();
  useEffect(() => {
    setImage(image);
  }, [image]);
  return (
    <>
      <StyleImg src={fetchUrl()} alt="test" />
      <StyleImg src={BaseUrl + image} alt="test" />
    </>
  );
};

export default ResultImgContainer;
