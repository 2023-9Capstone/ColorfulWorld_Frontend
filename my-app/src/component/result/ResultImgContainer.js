import React from "react";
import styled from "styled-components";
import { BaseUrl } from "../../utils/SubmitUrl";

const StyleImg = styled.img`
  width: 320px;
  height: auto;
  margin-right: 80px;
`;
//<StyleImg src={BaseUrl + imageURL[0]} alt="test" />
const ResultImgContainer = ({ flag, Resource }) => {
  const image = Resource.image?.read();

  return (
    <>
      <StyleImg src={BaseUrl + image.url} alt="transfer" />
    </>
  );
};

export default ResultImgContainer;
