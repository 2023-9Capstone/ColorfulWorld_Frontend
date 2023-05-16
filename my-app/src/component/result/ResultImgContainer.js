import React from "react";
import styled from "styled-components";
import ImageChange from "../../utils/ImageChange";
import { fetchUrl } from "../../utils/SubmitUrl";

const StyleImg = styled.img`
  width: 320px;
  height: auto;
  margin-right: 80px;
`;

const resource = ImageChange();

const ResultContainer = ({ setImage }) => {
  const image = resource.image.read();
  return (
    <>
      <StyleImg src={fetchUrl()} alt="test" />
      <StyleImg src={image} alt="test" />
    </>
  );
};

export default ResultContainer;
