import styled from "styled-components";

const StyleOkBtn = styled.button`
  width: 60px;
  height: 40px;
  background-color: #ebd500;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  margin-top: 10px;
  font-family: "Noto Serif KR", serif;
  :hover {
    cursor: pointer;
  }
`;

const OkBtn = (props) => {
  const { value, onClick } = props;
  return <StyleOkBtn onClick={onClick}>{value}</StyleOkBtn>;
};

export default OkBtn;
