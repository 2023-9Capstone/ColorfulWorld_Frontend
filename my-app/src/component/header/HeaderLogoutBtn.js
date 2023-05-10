import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyleJoinBtn = styled.p`
  font-family: "Noto Serif KR", serif;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #f0dd22;
`;

const HeaderLogoutBtn = () => {
  const navigate = useNavigate();
  const Logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      axios
        .post(
          "/out",
          {},
          {
            headers: {
              access_token: localStorage.getItem("atk"),
              refresh_token: localStorage.getItem("rtk"),
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            localStorage.removeItem("atk");
            localStorage.removeItem("rtk");
            localStorage.removeItem("loginState");
            alert("로그아웃 성공! 다음에 또 만나요");
            navigate("/login");
          } else if (response.status === 401) {
            localStorage.removeItem("atk");
            localStorage.removeItem("rtk");
            localStorage.removeItem("loginState");
            alert("토큰이 유효하지 않아 강제 로그아웃 됩니다.");
            navigate("/login");
          } else {
            alert("로그아웃에 실패하였습니다.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Link to="/login">
      <StyleJoinBtn onClick={Logout}>LOGOUT</StyleJoinBtn>
    </Link>
  );
};

export default HeaderLogoutBtn;
