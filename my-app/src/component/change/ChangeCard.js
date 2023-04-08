import styled from "styled-components";
import ImgBtn from "../commons/ImgBtn";
import { useRef } from "react";
import axios from "axios"


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
    const inputRef = useRef();
    const ClickChangeBtn = () =>{//버튼 클릭시 Input실행함
        inputRef.current.click();
    }

    const UploadImage = () =>{//Input이 바뀌면 실행 서버 통신 예상
        const files = inputRef.current.files[0];
        TransferImg(files)

    }
    const DropImg = (event) =>{//이미지를 drop 후 실행 함수
        event.preventDefault();
        const files = event.dataTransfer.files[0];
        TransferImg(files)
    }
    const TransferImg = (files) =>{
        let formData = new FormData();
        formData.append("image",files);
        formData.append('idx', 1);
        axios.post("http://172.16.97.206:5002/colorization", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    }
    return (
        <StyleChangeCard
            onDrop={DropImg}
            onDragOver={(event)=>event.preventDefault()}>
            <StyleChagneHeder>여기에 이미지를 드롭해주세요!</StyleChagneHeder>
            <ImgBtn label="UPLOAD" clickfuc={ClickChangeBtn}/>
            <StyledInput type="file" 
                onChange={UploadImage} 
                ref={inputRef} 
            />
        </StyleChangeCard>
    )
}

export default ChangeCard;