import React from "react";
import styled from "styled-components";
import ImageChange from "../../utils/ImageChange";
import { fetchUrl } from "../../utils/SubmitUrl";
import { BaseUrl } from "../../utils/ImageChange";

const StyleImg = styled.img`
  width: 320px;
  height: auto;
  margin-right: 80px;
`;

//const resource = ImageChange();

const ResultContainer = ({ Resource }) => {
  const image = Resource.image.read();
  console.log(image);
  return (
    <>
      <StyleImg src={fetchUrl()} alt="test" />
      <StyleImg src={BaseUrl + image} alt="test" />
    </>
  );
};

export default ResultContainer;
