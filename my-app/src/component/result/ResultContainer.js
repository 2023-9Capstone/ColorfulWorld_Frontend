import React from "react";
import ImageChange from "./ImageChange";
import styled from "styled-components";

const StyleImg = styled.img`
  width: 320px;
  height: auto;
  margin: 80px;
`;

const resource = ImageChange();

const ResultContainer = () => {
  const image = resource.image.read();
  return <StyleImg src={"http://54.180.159.100:5100" + image} alt="test" />;
};

export default ResultContainer;
