import styled from "@emotion/styled";

export const EventWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
`;
export const EventInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  color: var(--bold-color);
  font-size: 1rem;
  box-sizing: border-box;
`;
export const EventItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0px;
  padding: 2px;
  color: var(--normal-color);
  text-decoration: none;
  box-sizing: border-box;
`;
export const EventImg = styled.img`
  width: 100%;
  border-radius: 20%;
  box-sizing: border-box;
`;
export const EventDate = styled.div`
  padding: 5px;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  box-sizing: border-box;
`;
export const MoreEvent = styled.a`
  color: var(--darker-color) !important;
  text-align: center;
  text-decoration: none;
`;
