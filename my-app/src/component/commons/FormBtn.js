import styled from "styled-components";

const StyleFormBtn = styled.button`
  width: 360px;
  height: 44px;
  background-color: #ebd500;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  :hover {
    cursor: pointer;
  }
  margin: 5px;
  padding: 10px;
`;

const FormBtn = (props) => {
  const { value, ClickFun } = props;
  return <StyleFormBtn onClick={ClickFun}>{value}</StyleFormBtn>;
};

export default FormBtn;
