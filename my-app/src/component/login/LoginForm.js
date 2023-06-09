import styled from "styled-components";
import StyleInput from "../commons/Input";
import FormBtn from "../commons/FormBtn";
import axios from "axios";
import Spring from "../../utils/axios/Spring";
import { useNavigate } from "react-router-dom";

const StyleLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 400px;
  @media (max-width: 786px) {
    width: 100%;
    align-items: center;
  }
`;

const LoginForm = () => {
  const navigate = useNavigate();
  //로그인 제출했을시 함수
  const onSubmit = async (event) => {
    event.preventDefault();
    const [email, password] = event.target;
    let body = { email: email.value, password: password.value };
    await Spring.post("/login", body)
      .then((response) => {
        if (response.status === 200) {
          axios.defaults.headers.common[
            "access_token"
          ] = `${response.headers.access_token}`;
          console.log(response);
          localStorage.setItem("atk", response.headers.access_token);
          localStorage.setItem("rtk", response.headers.refresh_token);
          localStorage.setItem("index", response.headers.intensity);
          localStorage.setItem("loginState", true);
          alert("로그인 성공! 환영합니다.");
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response.status === 403) {
          localStorage.setItem("atk", error.response.headers.access_token);
        } else if (error.response.status === 400) {
          if (error.response.data.code === "LOGIN-001") {
            alert("일치하는 회원이 없습니다. 먼저 회원가입을 진행해주세요!");
          } else if (error.response.data.code === "LOGIN-002") {
            alert("비밀번호가 일치하지 않습니다.");
          }
        }
      });
  };
  return (
    <StyleLoginForm onSubmit={onSubmit}>
      <div>
        <StyleInput
          label="이메일"
          placeholder="example@coloful.world"
          type="text"
        />
        <StyleInput label="비밀번호" placeholder="********" type="password" />
      </div>
      <FormBtn value="LOGIN" />
    </StyleLoginForm>
  );
};

export default LoginForm;
