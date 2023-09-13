import axios from "axios";
import { url, key } from "../../module/axios";
import { useEffect, useState } from "react";
import {
  NoticeWrapper,
  NoticeItem,
  NoticeTitle,
  NoticeInfoWrapper,
  NoticeType,
  NoticeDate,
  NoticeInfo,
  MoreNotice,
} from "../../styles/styled/notice";
export default function Notice() {
  const [noticeList, setNoticeList] = useState([{}]);
  async function getNotice() {
    await axios
      .get(url + "/news/notices", {
        headers: {
          Authorization: key,
        },
      })
      .then((response) => {
        setNoticeList(response.data);
        console.log(noticeList);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getNotice();
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "safeCookie2=foo";
    document.cookie = "crossCookie=bar; SaemSite=None; Secure";
  }, []);
  return (
    <NoticeWrapper>
      <NoticeInfo>로스트아크 공지사항 목록</NoticeInfo>
      {noticeList.map((item, idx) =>
        idx < 5 ? (
          <NoticeItem key={item.Title + item.Type} href={item.Link} target="_blank" rel="noopener noreferrer">
            <NoticeTitle key={item.Title}>{item.Title}</NoticeTitle>
            <NoticeInfoWrapper key={item.Type + item.Title}>
              <NoticeType>{item.Type} |&nbsp;</NoticeType>
              <NoticeDate>{item.Date?.replace("T", " ").substr(0, 11)}</NoticeDate>
            </NoticeInfoWrapper>
          </NoticeItem>
        ) : (
          ""
        )
      )}
      <NoticeInfo>
        <MoreNotice href="https://lostark.game.onstove.com/News/Notice/List" target="_blank" rel="noopener noreferrer">
          공지사항 더 보기
        </MoreNotice>
      </NoticeInfo>
    </NoticeWrapper>
  );
}
