import { useRef, useState, useContext } from "react";
import { ImageContext } from "../../App";
import styled from "styled-components";
import ImgBtn from "../commons/ImgBtn";
import { ChangeCheck } from "../../utils/change/ChangeCheck";
import ChangeScreen from "./ChangeScreen";

const StyleChangeCard = styled.main`
  width: 540px;
  height: 484px;
  background: #ffffff;
  border: 1px dashed #888888;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 786px) {
    width: 90vw;
    height: 50vh;
  }
`;
const StyleChagneHeder = styled.p`
  font-family: "Noto Serif KR", serif;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 0px;
  @media (max-width: 786px) {
    font-size: 16px;
  }
`;
const StyledInput = styled.input`
  display: none;
`;
//함수를 나눠야한다.
const ChangeCard = () => {
  const { setImage } = useContext(ImageContext);
  const [imgUrl, setImgUrl] = useState("");
  const [change, setChange] = useState(false);
  const inputRef = useRef();
  const ClickChangeBtn = () => {
    inputRef.current.value = "";
    inputRef.current.click();
  }; //버튼 클릭시 Input실행함

  const UploadImg = (dropImg = null) => {
    const files = dropImg || inputRef.current.files[0];
    if (!files) return;
    setImage(() => files);
    ChangeCheck(files, setImgUrl);
  }; //context에 이미지 저장, url을 이용해서 이미지 보여주기

  const DropImg = (event) => {
    //이미지를 drop 후 실행 함수
    event.preventDefault();
    setChange(false);
    const files = event.dataTransfer.files[0];
    UploadImg(files);
  };
  return (
    <>
      <StyleChangeCard
        onDrop={DropImg}
        onDragOver={(event) => {
          event.preventDefault();
          setChange(true);
        }}
        onDragLeave={(event) => {
          const { currentTarget, target } = event;
          if (currentTarget !== target) setChange(false);
        }}
        onMouseOver={() => setChange(false)}
      >
        {change && <ChangeScreen />}
        <StyleChagneHeder>여기에 이미지를 드롭해주세요!</StyleChagneHeder>
        {imgUrl && (
          <img
            alt="사용자가 올린 이미지"
            src={imgUrl}
            style={{ width: "auto", height: "40%" }}
          />
        )}
        <ImgBtn label="UPLOAD" clickfuc={ClickChangeBtn} />
        <StyledInput type="file" onChange={() => UploadImg()} ref={inputRef} />
      </StyleChangeCard>
    </>
  );
};

export default ChangeCard;
