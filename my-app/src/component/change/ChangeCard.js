import styled from "styled-components";
import ImgBtn from "../commons/ImgBtn";
import { useRef, useState } from "react";
import { ChangeCheck } from "./changeFun/ChangeCheck";
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
`;
const StyleChagneHeder = styled.p`
  font-family: "Noto Serif KR", serif;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 0px;
`;
const StyledInput = styled.input`
  visibility: hidden;
`;
//함수를 나눠야한다.
const ChangeCard = ({ getImageUrl }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [change, setChange] = useState(false);
  const inputRef = useRef();
  const ClickChangeBtn = () => inputRef.current.click(); //버튼 클릭시 Input실행함

  const UploadImg = () => {
    //Input이 바뀌면 실행 서버 통신 예상
    const files = inputRef.current.files[0];
    if (!files) return;
    ChangeCheck(files, setImgUrl, getImageUrl);
  };

  const DropImg = (event) => {
    //이미지를 drop 후 실행 함수 이미지 압축 필요
    event.preventDefault();
    setChange(false);
    const files = event.dataTransfer.files[0];
    ChangeCheck(files, setImgUrl, getImageUrl);
  };

  //DragOver은 drag가
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
            style={{ width: "auto", height: "200px" }}
          />
        )}
        <ImgBtn label="UPLOAD" clickfuc={ClickChangeBtn} />
        <StyledInput type="file" onChange={UploadImg} ref={inputRef} />
      </StyleChangeCard>
    </>
  );
};

export default ChangeCard;
