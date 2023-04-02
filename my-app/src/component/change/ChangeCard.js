import styled from "styled-components";
import ImgBtn from "../commons/ImgBtn";
import { useRef, useState } from "react";

const StyleChangeCard = styled.main`
width: 540px;
height: 484px;
background: #FFFFFF;
border: 1px dashed #888888;
border-radius: 10px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`
const StyleChagneHeder = styled.p`
font-family: 'Noto Serif KR', serif;
font-size: 24px;
`
const StyledInput = styled.input`
    visibility: hidden;
`

const ChangeCard = () =>{
    const [testimg,setTestimg] = useState(null);
    const inputRef = useRef();
    const ClickChangeBtn = () =>{//버튼 클릭시 Input실행함
        inputRef.current.click();
    }

    const UploadImage = () =>{//Input이 바뀌면 실행 서버 통신 예상
        console.log(inputRef.current.value)
    }

    const DropImg = (event) =>{//이미지를 drop 후 실행 함수
        event.preventDefault();
        const files = event.dataTransfer.files[0];
        setTestimg(window.URL.createObjectURL(files))
    }
    return (
        <StyleChangeCard
            onDrop={DropImg}
            onDragOver={(event)=>event.preventDefault()}>
            <StyleChagneHeder>여기에 이미지를 드롭해주세요!</StyleChagneHeder>
            {testimg||<img url={testimg}/>}
            <ImgBtn label="UPLOAD" clickfuc={ClickChangeBtn}/>
            <StyledInput type="file" 
                onChange={UploadImage} 
                ref={inputRef} 
            />
        </StyleChangeCard>
    )
}

export default ChangeCard;