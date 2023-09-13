import { EventWrapper, EventItem, EventImg, EventDate, EventInfo, MoreEvent } from "../../styles/styled/event";
import axios from "axios";
import { url, key } from "../../module/axios";
import { useEffect, useState } from "react";
export default function Event() {
  const [eventList, setEventList] = useState([{}]);
  async function getEvent() {
    await axios
      .get(url + "/news/events", {
        headers: {
          Authorization: key,
        },
      })
      .then((response) => {
        setEventList(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getEvent();
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "safeCookie2=foo";
    document.cookie = "crossCookie=bar; SaemSite=None; Secure";
  }, []);
  return (
    <>
      <EventWrapper>
        <EventInfo>로스트아크 이벤트 목록</EventInfo>
        {eventList.map((item, idx) =>
          idx < 4 ? (
            <EventItem key={item.Title + item.Link} href={item.Link} target="_blank" rel="noopener noreferrer">
              <EventImg key={item.Thumbnail} src={item.Thumbnail} title={item.Title} />
              <EventDate key={item.StartDate}>
                {item.StartDate?.replace("T", " ").substr(5, 5)} ~&nbsp;
                {item.EndDate?.replace("T", " ").substr(5, 5)}
              </EventDate>
            </EventItem>
          ) : (
            ""
          )
        )}
        <EventInfo>
          <MoreEvent href="https://lostark.game.onstove.com/News/Event/Now" target="_blank" rel="noopener noreferrer">
            이벤트 더 보기
          </MoreEvent>
        </EventInfo>
      </EventWrapper>
    </>
  );
}
