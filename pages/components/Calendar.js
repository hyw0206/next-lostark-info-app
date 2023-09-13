import axios from "axios";
import { url, key } from "../../module/axios";
import { useEffect, useState } from "react";
import {
  CalendarWrapper,
  AdventureWrapper,
  AdventureInfo,
  AdventureTime,
  DailyWrapper,
  DailyContents,
  DailyContentsIcon,
  DailyContentsName,
  DailyContentsTime,
} from "../../styles/styled/calendar";
export default function Calendar() {
  const [calendarList, setCalendarList] = useState([{}]);
  const time = Date.now();
  const today = new Date(time);
  const day = today.getDay();
  const isToday = today.toISOString().substring(0, 10);
  async function getCalendar() {
    await axios
      .get(url + "/gamecontents/calendar", {
        headers: {
          Authorization: key,
        },
      })
      .then((response) => {
        setCalendarList(response.data);
        console.log("New data");
        console.log(calendarList);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getCalendar();
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "safeCookie2=foo";
    document.cookie = "crossCookie=bar; SaemSite=None; Secure";
  }, []);
  console.log(calendarList);
  return (
    <CalendarWrapper>
      <AdventureWrapper>
        <AdventureInfo>모험 섬 일정</AdventureInfo>
        <AdventureTime>월~금 11:00, 13:00, 19:00, 21:00, 23:00</AdventureTime>
        <AdventureTime>토~일 09:00, 11:00, 13:00 (1그룹) | 19:00, 21:00, 23:00 (2그룹) | 주말은 그룹당 보상 1회 획득 가능</AdventureTime>
      </AdventureWrapper>
      <DailyWrapper>
        <DailyContents>
          <DailyContentsIcon src="https://cdn-lostark.game.onstove.com/efui_iconatlas/achieve/achieve_13_11.png" />
          <DailyContentsName>카오스게이트</DailyContentsName>
          <DailyContentsTime>
            {day == 0 || day == 1 || day == 4 || day == 6 ? "카오스게이트 등장일 (오전 11시 ~ 오전 5시 정각)" : "카오스게이트 미등장일"}
          </DailyContentsTime>
        </DailyContents>
        <DailyContents>
          <DailyContentsIcon src="https://cdn-lostark.game.onstove.com/efui_iconatlas/achieve/achieve_09_19.png" />
          <DailyContentsName>유령선</DailyContentsName>
          <DailyContentsTime>
            {day == 2 || day == 4 || day == 6 ? "유령선 등장일 (오전 11시 ~ 오전 5시 정각)" : "유령선 미등장일"}
          </DailyContentsTime>
        </DailyContents>
        <DailyContents>
          <DailyContentsIcon src="https://cdn-lostark.game.onstove.com/efui_iconatlas/achieve/achieve_14_142.png" />
          <DailyContentsName>필드보스</DailyContentsName>
          <DailyContentsTime>
            {day == 0 || day == 2 || day == 5 ? "필드보스 등장일 (오전 11시 ~ 오전 5시 정각)" : "필드보스 미등장일"}
          </DailyContentsTime>
        </DailyContents>
      </DailyWrapper>
    </CalendarWrapper>
  );
}
