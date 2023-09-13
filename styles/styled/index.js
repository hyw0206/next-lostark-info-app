import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--background-color);
`;
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
export const Aside = styled.aside`
  overflow: hidden;
  width: 15%;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

export const Main = styled.main`
  width: 80%;
  height: 100%;
  min-height: 1000px;
  padding: 10px;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  box-sizing: border-box;
`;
export const Footer = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px;
  border-top: 1px solid var(--border-color);
  background: var(--background-color);
  color: var(--normal-color);
  line-height: 20px;
  box-sizing: border-box;
`;
