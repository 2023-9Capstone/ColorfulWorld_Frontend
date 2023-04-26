import styled from "styled-components";
import ImgBtn from "../commons/ImgBtn";
import { useRef, useState } from "react";
import ChangeScreen from "./ChangeScreen";
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
margin-bottom:50px;
`
const StyleChagneHeder = styled.p`
font-family: 'Noto Serif KR', serif;
font-size: 24px;
margin-top:20px;
margin-bottom:0px;
`
const StyledInput = styled.input`
    visibility: hidden;
`



const ChangeCard = () =>{
    const BaseUrl = "http://172.16.97.206:5002";
    const [imgUrl,setImgUrl] = useState("")
    const [change,setChange] = useState(false)
    const inputRef = useRef();
    const ImgExtension = ["png","jpeg","jpg"];
    const ClickChangeBtn = () =>inputRef.current.click(); //버튼 클릭시 Input실행함

    const CheckingImage = (files) =>{//파일 확장자 확인하기위한 함수
        const {type} = files;
        const slash = type.indexOf("/");
        const extension = type.slice(slash+1,type.length);
        return ImgExtension.includes(extension.toLowerCase())//소문자 대문자 구별없이 하는걸로!
    }

    const UploadImg = () =>{//Input이 바뀌면 실행 서버 통신 예상
        const files = inputRef.current.files[0];
        if(!files) return
        if(!CheckingImage(files)){
            window.alert("이미지 형식이 맞지 않습니다!")
            return;
        }
        setImgUrl(URL.createObjectURL(files))
        //TransferImg(files)
    }

    const DropImg = (event) =>{//이미지를 drop 후 실행 함수 이미지 압축 필요
        event.preventDefault();
        setChange(false)
        const files = event.dataTransfer.files[0];
        if(!CheckingImage(files)){
            window.alert("이미지 형식이 맞지 않습니다!")
            return;
        }
        setImgUrl(URL.createObjectURL(files))
        //TransferImg(files)
    }

    const getFileFomrUrlImage = async (url) => {//이미지를 파일로 바꾸는 함수
        const res = await fetch(url);
        const data = await res.blob();
        const fileName = url.split('/').pop();
        const fileExt = url.split('.').pop();
        const metaData = {type: `image/${fileExt}`};
        return new File([data], fileName, metaData);
    }


    const TransferImg = (files) =>{//서버에 이미지를 전달하는 함수
        let formData = new FormData();
        formData.append("image",files);
        formData.append('idx', 1);
        axios.post("http://172.16.97.206:5002/colorization", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res=> res.data.url)
        .then(url => getFileFomrUrlImage(BaseUrl+url).then(res=>setImgUrl(URL.createObjectURL(res))))
        .catch(err=>{
            console.log(err)
        })

    }
    //DragOver은 drag가  
    return (//test중이라 아직 img가 있어용
        <>
        
        <StyleChangeCard
            onDrop={DropImg}
            onDragOver={(event)=>{
                event.preventDefault()
                setChange(true)
            }}
            onDragLeave={(event)=>{
                const {currentTarget,target} = event;
                if(currentTarget!==target)
                    setChange(false)
            }}
            onMouseOver={()=>setChange(false)}
            >
            {change&&<ChangeScreen />}
            <StyleChagneHeder>여기에 이미지를 드롭해주세요!</StyleChagneHeder>
            {imgUrl&&<img alt="사용자가 올린 이미지" src={imgUrl} style={{width:"auto",height:"200px"}}/>}
            <ImgBtn label="UPLOAD" clickfuc={ClickChangeBtn}/>
            <StyledInput type="file" 
                onChange={UploadImg} 
                ref={inputRef} 
            />
        </StyleChangeCard>
        </>
    )
}

export default ChangeCard;