import styled from "styled-components";
import StyleInput from "../commons/Input";
import FormBtn from "../commons/FormBtn";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import JoinIntensity from "./JoinIntensity";

const StyleLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 600px;
  padding: 20px;
`;

const StyleEmailConfirmBtn = styled.input.attrs({ type: "button" })`
  width: 100px;
  height: 30px;
  border: solid 1px #ebd500;
  font-family: "Noto Sans KR", sans-serif;
  background-color: white;
  color: #ebd500;
  border-radius: 10px;
  /* margin-bottom: 10px; */
  :hover {
    cursor: pointer;
  }
`;

const JoinForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [code, setCode] = useState("");
  const [same, setSame] = useState(false);
  const [responseCode, setResponseCode] = useState("");

  //이메일 유효성 검사(@와 . 있는지 체크)
  const checkEmail = (e) => {
    if (email !== "" && !email.includes("@") && !email.includes("."))
      alert("올바르지 않은 이메일 형식입니다.");
  };
  //비밀번호 유효성 검사(문자, 숫자, 특수문자를 포함한 8자리 이상인지 체크)
  const checkPassword = (password) => {
    const regexpPassword = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,}$/;
    if (regexpPassword.test(password)) return true;
    return false;
  };
  //이메일 인증코드 전송 버튼 클릭 시 함수
  const emailConfirm = async (e) => {
    await axios
      .get(`/checkEmail?email=${email}`)
      .then((response) => {
        console.log(response);
        setResponseCode(response.data);
        if (response.status === 409)
          alert("이미 회원가입 완료한 이메일입니다.");
        else {
          alert(
            "이메일 인증코드가 입력한 이메일로 전송되었습니다. 아래에 인증코드를 입력해주세요."
          );
        }
      })
      .catch((err) => console.log(err));
  };

  //이메일 인증코드 동일한지 확인 함수
  const emailCodeConfirm = () => {
    if (code === responseCode) {
      setSame(true);
      alert("인증코드 확인이 완료되었습니다.");
    }
  };

  //모든 폼이 조건을 만족했는지 유효성 검사하는 함수
  const finalValidation = () => {
    console.log(same, code, responseCode);
    if (email === "") alert("이메일을 입력해주세요.");
    else if (responseCode !== code) alert("인증코드가 올바르지 않습니다.");
    else if (password === "") alert("비밀번호를 입력해주세요.");
    else if (passwordConfirm === "") alert("비밀번호 확인을 입력해주세요");
    else if (password !== passwordConfirm)
      alert("비밀번호와 비밀번호 확인이 같지 않습니다.\n다시 입력해주세요.");
    else if (checkEmail(email) === false)
      alert("이메일 형식을 다시 확인해주세요.");
    else if (checkPassword(password) === false)
      alert(
        "비밀번호는 영문자, 숫자, 특수문자를 포함한 8자리 이상이어야 합니다."
      );
    else return true;
  };

  //회원가입 제출했을시 함수
  const onSubmit = async (e) => {
    e.preventDefault();
    if (finalValidation() === true) {
      await axios
        .post("/join", {
          email: email,
          password: password,
          intensity: localStorage.getItem("index") + "",
        })
        .then((response) => {
          if (response.status === 200) {
            alert("회원가입에 성공하셨습니다. 로그인을 진행해주세요! ");
            navigate("/login");
          } else {
            alert("이미 회원가입 완료한 이메일입니다.");
          }
        })
        .catch((error) => console.error("에러 : ", error));
    }
  };
  return (
    <>
      <StyleLoginForm onSubmit={onSubmit}>
        <StyleInput
          label="이메일"
          placeholder="example@coloful.world"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={checkEmail}
        />
        <StyleEmailConfirmBtn onClick={emailConfirm} value="인증코드 전송" />

        <StyleInput
          label="이메일 인증코드"
          placeholder="이메일 인증 코드를 입력하세요"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <StyleEmailConfirmBtn
          onClick={emailCodeConfirm}
          value="인증코드 확인"
        />

        <StyleInput
          label="비밀번호"
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyleInput
          label="비밀번호확인"
          placeholder="********"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <JoinIntensity />
        <FormBtn value="JOIN" />
      </StyleLoginForm>
    </>
  );
};

export default JoinForm;
