import styled from "@emotion/styled";

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 20px auto;
  border-radius: 15px;
  background: #212225;
  box-sizing: border-box;
`;
export const AdventureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;
export const AdventureInfo = styled.div`
  width: 100%;
  padding: 5px;
  color: var(--bold-color);
  text-align: center;
  box-sizing: border-box;
`;
export const AdventureTime = styled.div`
  width: 100%;
  color: var(--darker-color);
  font-size: 0.75rem;
  text-align: center;
`;

export const DailyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 5px);
  margin-left: 5px;
  box-sizing: border-box;
`;
export const DailyContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  box-sizing: border-box;
`;
export const DailyContentsIcon = styled.img`
  width: 5%;
  border-radius: 50%;
`;
export const DailyContentsName = styled.div`
  width: 35%;
  color: var(--normal-color);
  text-align: center;
`;

export const DailyContentsTime = styled.div`
  width: 50%;
  color: #ff2300;
  font-size: 0.9rem;
  text-align: center;
`;
