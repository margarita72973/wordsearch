import styled from "@emotion/styled";

const TextField = styled.input`
  border-style: solid;
  border-color: ${({ isValid = true }: { isValid: Boolean }) =>
    !isValid ? "#ed5454" : "#e0dfe6"};
  border-width: ${({ isValid = true }: { isValid: Boolean }) =>
    !isValid ? "2px" : "1px"};
  border-radius: 8px;
  height: 100%;
  width: 100%;
  font-size: 14px;
  text-align: center;
  padding: 0px;
  outline: none;
  margin-bottom: 2px;
  box-sizing: border-box;
  max-height: 40px;
  font-family: Questrial;
  ::placeholder {
    color: #828282;
    font-size: 14px;
  }
  &:focus {
    border-color: ${({ isValid = true }: { isValid: Boolean }) =>
      !isValid ? "#ed5454" : "#ed9954"};
    border-width: 2px;
    ::placeholder {
      color: transparent;
    }
  }
`;

export default TextField;
