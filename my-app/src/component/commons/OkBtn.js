import styled from "styled-components";

const StyleOkBtn = styled.button`
  width: 80px;
  height: 60px;
  background-color: #ebd500;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-family: "Noto Serif KR", serif;
  margin: 20px;
  :hover {
    cursor: pointer;
  }
`;

const OkBtn = (props) => {
  const { value } = props;
  return <StyleOkBtn>{value}</StyleOkBtn>;
};

export default OkBtn;
