import React from "react";
import { useState } from "react";
import styled from "styled-components";
import sample from "../img/sample.jpeg";

const StyleSelectWrapper = styled.div`
  margin: 10px;
`;
const StyleImgWrapper = styled.div`
  display: inline-block;
`;
const StyleImg = styled.img`
  margin: 5px;
`;
const StyleRadio = styled.input.attrs({ type: "radio" })`
  accent-color: brown;
`;
const StyleLabel = styled.label`
  cursor: pointer;
`;

const JoinIntensity = () => {
  const [index, setIndex] = useState("");
  const intensityData1 = [
    { value: 1, img: sample },
    { value: 2, img: sample },
    { value: 3, img: sample },
  ];
  const intensityData2 = [
    { value: 1, img: sample },
    { value: 2, img: sample },
    { value: 3, img: sample },
  ];

  const handleRadioBtn = (e) => {
    setIndex(e.target.value);
    localStorage.setItem("index", e.target.value);
  };

  return (
    <>
      <h5 style={{ margin: 10 }}>
        색각이상 종류와 강도 선택 (숫자가 클수록 센 강도입니다.)
      </h5>
      <StyleSelectWrapper>
        <h5 style={{ margin: 5 }}>제 1색각이상자</h5>
        <StyleLabel>
          {intensityData1.map((v, i) => {
            return (
              <StyleImgWrapper key={v.value}>
                <StyleLabel>
                  <div style={{ textAlign: "center" }}>
                    {v.value}단계{" "}
                    <StyleRadio
                      type="radio"
                      value={i}
                      checked={index == i}
                      onChange={handleRadioBtn}
                    />
                  </div>
                  <StyleImg src={v.img} alt="강도 별 이미지" width={100} />
                </StyleLabel>
              </StyleImgWrapper>
            );
          })}
        </StyleLabel>
      </StyleSelectWrapper>
      <StyleSelectWrapper>
        <h5 style={{ margin: 5 }}>제 2색각이상자</h5>
        {/* <label> */}
        {intensityData2.map((v, i) => {
          return (
            <StyleImgWrapper key={v.value}>
              <StyleLabel>
                <div style={{ textAlign: "center" }}>
                  {v.value}단계{" "}
                  <StyleRadio
                    type="radio"
                    value={i + 3}
                    checked={index == i + 3}
                    onChange={handleRadioBtn}
                  />
                </div>
                <StyleImg src={v.img} alt="" width={100} />
              </StyleLabel>
            </StyleImgWrapper>
          );
        })}
        {/* </label> */}
      </StyleSelectWrapper>
    </>
  );
};

export default JoinIntensity;
