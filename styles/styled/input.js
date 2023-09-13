import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 10px auto;
  padding: 5px;
  box-sizing: border-box;
`;
export const InputItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const InputTitle = styled.label`
  margin-right: 10px;
  color: var(--bold-color);
  font-size: 1.5rem;
`;

export const InputNickname = styled.input`
  display: inline-block;
  width: 40%;
  height: 2em;
  margin-right: 10px;
  padding-left: 5px;
  border: none;
  background: var(--input-color);
  color: var(--normal-color);
  line-height: 2em;
`;

export const InputButton = styled.button`
  overflow: visible;
  padding: 5px;
  border: 1px solid #ffffff;
  border-radius: 0;
  box-shadow: none;
  background: var(--bold-color);
  cursor: pointer;
`;
export const NickNameError = styled.div`
  color: #ff0000;
`;

export const MainError = styled.div`
  width: 100%;
  padding: 5px;
  font-size: 1.2rem;
  text-align: center;
`;
export const ErrorText = styled.span`
  color: #ff0000;
`;
