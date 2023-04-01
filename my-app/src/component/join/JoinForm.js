import styled from "styled-components";
import StyleInput from "../commons/Input";
import FormBtn from "../commons/FormBtn";

const StyleLoginForm = styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
height:400px;
`



const JoinForm = () =>{
    const onSubmit = () =>{//회원가입 제출했을시 함수

    }
    return (
        <StyleLoginForm onSubmit={onSubmit}>
            <div>
            <StyleInput label="이메일" placeholder="example@coloful.world" type="text"/>
            <StyleInput label="비밀번호" placeholder="********" type="password"/>
            <StyleInput label="비밀번호확인" placeholder="********" type="password"/>
            </div>
            <FormBtn value="JOIN"/>
        </StyleLoginForm>
    )
}

export default JoinForm;