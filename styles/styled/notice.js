import styled from "@emotion/styled";

export const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px auto 0;
  box-sizing: border-box;
`;
export const NoticeInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  color: var(--bold-color);
  font-size: 0.85rem;
  box-sizing: border-box;
`;
export const NoticeItem = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  color: var(--normal-color);
  letter-spacing: 0.09em;
  text-decoration: none;
  box-sizing: border-box;
`;
export const NoticeTitle = styled.div`
  width: 100%;
  font-size: 0.9rem;
  color: var(--normal-color);
`;
// #15181D -> 백그라운드
// #1C1F26 -> 그 뭐더라? 그거 그 AREA
// #2B313A -> Input창,

// #464C56 -> border

// color
// 8F8F98 -> 어두운거
// cecece -> 옅은거
// eeeeee -> 진한거
export const NoticeInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: var(--darker-color);
`;
export const NoticeType = styled.div`
  font-size: 0.85rem;
`;
export const NoticeDate = styled.div`
  flex-basis: 2;
  font-size: 0.85rem;
`;
export const MoreNotice = styled.a`
  color: var(--darker-color) !important;
  text-decoration: none;
`;
