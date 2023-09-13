import axios from "axios";
import ReactHTMLParser from "react-html-parser";
import { url, key } from "../../module/axios";
import { useEffect, useState } from "react";
import {
  InputWrapper,
  InputTitle,
  InputNickname,
  InputButton,
  NickNameError,
  InputItemWrapper,
  MainError,
  ErrorText,
} from "../../styles/styled/input";
import {
  InfoWrapper,
  AreaWrapper,
  MainWrapper,
  Nickname,
  LevelWrapper,
  LevelItem,
  LevelTitle,
  LevelText,
  ProfileWrapper,
  ProfileItem,
  ProfileTitle,
  ProfileText,
  EquipmentItem,
  EquipmentItemImageWrapper,
  EquipmentItemImage,
  EquipmentItemText,
  EquipmentItemTextac,
  ItemNameInfo,
  EqupimentTooltip,
  TooltipWrapper,
  TooltipMain,
  TooltipMainImg,
  TooltipMainText,
  TooltipMainTextItem,
  TooltipTextItem,
  CombatWrapper,
  CombatStat,
  CombatStatMainWrapper,
  CombatStatMain,
  CombatStatMainItem,
  CombatAnotherStat,
  CombatAnotherStatItem,
  Engarving,
  EngarvigItemWrapper,
  EngarvigItem,
  GemAndCard,
  GemAndCardTitle,
  GemTitle,
  GemWrapper,
  GemItem,
  GemImg,
  GemText,
  GemTooltip,
  Ssalmuck,
  CardWrapper,
  CardItemWrapper,
  CardItem,
  CardItemText,
} from "../../styles/styled/info";
export default function Input() {
  const [infoList, setInfoList] = useState([{}]);
  const [nickname, setNickName] = useState("");
  const [nicknameError, setNickNameError] = useState("");
  const [setData, setSetData] = useState([]);
  const [setDataInfo, setSetDataInfo] = useState([]);
  const [statInfo, setStatInfo] = useState([]);
  const [gem, setGem] = useState([]);
  const [error, setError] = useState("");
  const onChangeSetNickname = (e) => {
    setNickName(e.target.value);
  };
  const findQuality = (data) => {
    if (data >= 90) return "five";
    if (data >= 70) return "four";
    if (data >= 30) return "three";
    if (data >= 10) return "two";
    return "one";
  };
  const substringToFindSpace = (data) => {
    let idx = data.indexOf("L");
    return data.substring(0, idx).trim();
  };
  async function getInfo() {
    if (nickname.length < 2 || nickname.length > 12) {
      setNickNameError("닉네임은 2글자에서 12글자 사이입니다.");
      return;
    } else {
      setNickNameError("");
    }
    await axios
      .get(url + `/armories/characters/${nickname}`, {
        headers: {
          Authorization: key,
        },
      })
      .then((response) => {
        setInfoList(response.data);
        setSetData(response.data.ArmoryEquipment);
        setSetDataInfo([
          JSON.parse(response.data?.ArmoryEquipment[0].Tooltip),
          JSON.parse(response.data?.ArmoryEquipment[1].Tooltip),
          JSON.parse(response.data?.ArmoryEquipment[2].Tooltip),
          JSON.parse(response.data?.ArmoryEquipment[3].Tooltip),
          JSON.parse(response.data?.ArmoryEquipment[4].Tooltip),
          JSON.parse(response.data?.ArmoryEquipment[5].Tooltip),
          JSON.parse(response.data?.ArmoryEquipment[6].Tooltip),
          JSON.parse(response.data?.ArmoryEquipment[7].Tooltip),
          JSON.parse(response.data?.ArmoryEquipment[8].Tooltip),
          JSON.parse(response.data?.ArmoryEquipment[9].Tooltip),
          JSON.parse(response.data?.ArmoryEquipment[10].Tooltip),
          JSON.parse(response.data?.ArmoryEquipment[11].Tooltip),
        ]);

        setStatInfo(
          response.data.ArmoryProfile.Stats.sort(function (a, b) {
            return a.Value - b.Value;
          }).reverse()
        );
        setGem([]);
        setGem(
          response.data.ArmoryGem.Gems.sort(function (a, b) {
            return a.Level - b.Level;
          })
            .reverse()
            .sort(function (a, b) {
              return a.Name.substring(44, 46) < b.Name.substring(44, 46) ? -1 : a.Name.substring(44, 46) < b.Name.substring(44, 46) ? 1 : 0;
            })
        );
        console.log(setData, setDataInfo, statInfo, gem);

        return 0;
      })
      .catch((error) => {
        setError(error.response?.status + " " + error.response?.statusText);
      });
  }
  useEffect(() => {
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "safeCookie2=foo";
    document.cookie = "crossCookie=bar; SaemSite=None; Secure";
    console.log(infoList, setData);
  }, [infoList]);

  return (
    <>
      <InputWrapper>
        <InputItemWrapper>
          <InputTitle htmlFor="nickname">로스트아크 전투 정보 검색</InputTitle>
          <InputNickname type="text" id="nickname" placeholder="닉네임을 입력해주세요!" onChange={onChangeSetNickname} />
          <InputButton onClick={getInfo}>검색</InputButton>
        </InputItemWrapper>
        <NickNameError>{nicknameError}</NickNameError>
      </InputWrapper>
      <InfoWrapper>
        {infoList == null || infoList?.length <= 1 ? (
          <MainError>
            로스트아크 전투 정보 검색 사이트입니다. 창을 전체 크기로 두고 이용하시는걸 추천합니다. 일부 데이터가 깨져 보일 수 있습니다.
            <br />
            <ErrorText>
              {error == "undefined undefined"
                ? "캐릭터 명을 제대로 확인하고 다시 이용해주세요. 공백, 스페이스 바가 포함되어 있는지 확인해주세요."
                : error}{" "}
              {error.substring(0, 4) == "503" ? ": 로스트아크 서버 점검중입니다. 나중에 다시 이용해주세요." : ""}
              {error.substring(0, 4) == "429" ? "api 요청 한계 (분당 100회) 를 초과했습니다. 잠시 후 다시 시도해주세요." : ""}
            </ErrorText>
          </MainError>
        ) : infoList.ArmoryProfile.ItemAvgLevel.replace(",", "") > 1100 ? (
          <>
            <MainWrapper>
              <AreaWrapper>
                {infoList.ArmoryProfile.CharacterName?.length < 10 ? (
                  <Nickname>
                    [{infoList.ArmoryProfile.Title == null ? "모험가" : infoList.ArmoryProfile.Title}]{" "}
                    {infoList.ArmoryProfile.CharacterName} (Lv {infoList.ArmoryProfile.ItemAvgLevel})
                  </Nickname>
                ) : (
                  <Nickname fontSize="1.1rem">
                    [{infoList.ArmoryProfile.Title == null ? "모험가" : infoList.ArmoryProfile.Title}]{" "}
                    {infoList.ArmoryProfile.CharacterName} (Lv {infoList.ArmoryProfile.ItemAvgLevel})
                  </Nickname>
                )}
                <LevelWrapper>
                  <LevelItem>
                    <LevelTitle>아이템</LevelTitle>
                    <LevelText>{infoList.ArmoryProfile.ItemAvgLevel}</LevelText>
                  </LevelItem>
                  <LevelItem>
                    <LevelTitle>전투</LevelTitle>
                    <LevelText>Lv.{infoList.ArmoryProfile.CharacterLevel}</LevelText>
                  </LevelItem>
                  <LevelItem>
                    <LevelTitle>원정대</LevelTitle>
                    <LevelText>Lv.{infoList.ArmoryProfile.ExpeditionLevel}</LevelText>
                  </LevelItem>
                </LevelWrapper>
                <ProfileWrapper>
                  <ProfileItem>
                    <ProfileTitle>서버</ProfileTitle>
                    <ProfileText>{infoList.ArmoryProfile.ServerName}</ProfileText>
                  </ProfileItem>
                  <ProfileItem>
                    <ProfileTitle>클래스</ProfileTitle>
                    <ProfileText>{infoList.ArmoryProfile.CharacterClassName}</ProfileText>
                  </ProfileItem>
                  <ProfileItem>
                    <ProfileTitle>길드</ProfileTitle>
                    <ProfileText>{infoList.ArmoryProfile.GuildName}</ProfileText>
                  </ProfileItem>
                  <ProfileItem>
                    <ProfileTitle>PVP</ProfileTitle>
                    <ProfileText>{infoList.ArmoryProfile.PvpGradeName}</ProfileText>
                  </ProfileItem>
                  <ProfileItem>
                    <ProfileTitle>영지</ProfileTitle>
                    <ProfileText>Lv. {infoList.ArmoryProfile.TownLevel + " " + infoList.ArmoryProfile.TownName}</ProfileText>
                  </ProfileItem>
                </ProfileWrapper>
              </AreaWrapper>
              <AreaWrapper>
                <Nickname>장비</Nickname>
                {setData.map(
                  (item, idx) =>
                    idx < 6 &&
                    setDataInfo[idx]?.Element_005?.value && (
                      <EquipmentItem>
                        <EquipmentItemImageWrapper>
                          <EquipmentItemImage
                            src={JSON.stringify(item?.Icon).replaceAll('"', "")}
                            color={setDataInfo[idx]?.Element_000?.value.substring(31, 38)}
                          />
                          <EqupimentTooltip className="tooltip">
                            <TooltipWrapper>
                              <div>{ReactHTMLParser(setDataInfo[idx]?.Element_000.value)}</div>
                              <TooltipMain color={setDataInfo[idx]?.Element_000?.value.substring(31, 38)}>
                                <TooltipMainImg src={setDataInfo[idx]?.Element_001.value.slotData.iconPath} />
                                <TooltipMainText>
                                  <TooltipMainTextItem>{ReactHTMLParser(setDataInfo[idx]?.Element_001.value.leftStr0)}</TooltipMainTextItem>
                                  <TooltipMainTextItem>{ReactHTMLParser(setDataInfo[idx]?.Element_001.value.leftStr2)}</TooltipMainTextItem>
                                  <TooltipMainTextItem>
                                    {ReactHTMLParser(setDataInfo[idx]?.Element_001.value.leftStr1)}
                                    &nbsp;
                                    {setDataInfo[idx]?.Element_001?.value.qualityValue}
                                  </TooltipMainTextItem>
                                </TooltipMainText>
                              </TooltipMain>
                              <TooltipTextItem>{ReactHTMLParser(setDataInfo[idx]?.Element_005?.value.Element_000)}</TooltipTextItem>
                              <TooltipTextItem>{ReactHTMLParser(setDataInfo[idx]?.Element_005?.value.Element_001)}</TooltipTextItem>
                              <TooltipTextItem>{ReactHTMLParser(setDataInfo[idx]?.Element_006?.value.Element_000)}</TooltipTextItem>
                              <TooltipTextItem>{ReactHTMLParser(setDataInfo[idx]?.Element_006?.value.Element_001)}</TooltipTextItem>
                            </TooltipWrapper>
                          </EqupimentTooltip>
                          <div className={findQuality(setDataInfo[idx]?.Element_001?.value.qualityValue)} style={{ textAlign: "center" }}>
                            {setDataInfo[idx]?.Element_001?.value.qualityValue}
                          </div>
                        </EquipmentItemImageWrapper>
                        <ItemNameInfo color={setDataInfo[idx]?.Element_000?.value.substring(31, 38)}>
                          <EquipmentItemText>
                            {ReactHTMLParser(JSON.stringify(item?.Name).replaceAll('"', ""))}
                            <br />
                            {setDataInfo[idx]?.Element_001?.value.leftStr2.substring(16, 27)}
                          </EquipmentItemText>
                        </ItemNameInfo>
                      </EquipmentItem>
                    )
                )}
              </AreaWrapper>
              <AreaWrapper className="sp">
                <Nickname>장신구</Nickname>
                {setData.map(
                  (item, idx) =>
                    idx < 11 &&
                    idx > 5 && (
                      <>
                        <EquipmentItem>
                          <EquipmentItemImageWrapper>
                            <EquipmentItemImage
                              src={JSON.stringify(item?.Icon).replaceAll('"', "")}
                              color={setDataInfo[idx]?.Element_000?.value.substring(31, 38)}
                            />
                            <EqupimentTooltip className="tooltip">
                              <TooltipWrapper>
                                <div>{ReactHTMLParser(setDataInfo[idx]?.Element_000.value)}</div>
                                <TooltipMain color={setDataInfo[idx]?.Element_000?.value.substring(31, 38)}>
                                  <TooltipMainImg src={setDataInfo[idx]?.Element_001.value.slotData.iconPath} />
                                  <TooltipMainText>
                                    <TooltipMainTextItem>
                                      {ReactHTMLParser(setDataInfo[idx]?.Element_001.value.leftStr0)}
                                    </TooltipMainTextItem>
                                    <TooltipMainTextItem>
                                      {ReactHTMLParser(setDataInfo[idx]?.Element_001.value.leftStr2)}
                                    </TooltipMainTextItem>
                                    <TooltipMainTextItem>
                                      {ReactHTMLParser(setDataInfo[idx]?.Element_001.value.leftStr1)}
                                      &nbsp;
                                      {setDataInfo[idx]?.Element_001?.value.qualityValue}
                                    </TooltipMainTextItem>
                                  </TooltipMainText>
                                </TooltipMain>
                                <TooltipTextItem>{ReactHTMLParser(setDataInfo[idx]?.Element_004?.value.Element_000)}</TooltipTextItem>
                                <TooltipTextItem>{ReactHTMLParser(setDataInfo[idx]?.Element_004?.value.Element_001)}</TooltipTextItem>
                                <TooltipTextItem>{ReactHTMLParser(setDataInfo[idx]?.Element_005?.value.Element_000)}</TooltipTextItem>
                                <TooltipTextItem>{ReactHTMLParser(setDataInfo[idx]?.Element_005?.value.Element_001)}</TooltipTextItem>
                                <TooltipTextItem>
                                  {ReactHTMLParser(setDataInfo[idx]?.Element_006?.value.Element_000?.topStr)}
                                </TooltipTextItem>
                                {setDataInfo[idx]?.Element_006?.value?.Element_000?.contentStr?.Element_000?.contentStr && (
                                  <>
                                    <TooltipTextItem>
                                      {ReactHTMLParser(
                                        setDataInfo[idx]?.Element_006?.value.Element_000.contentStr.Element_000.contentStr +
                                          setDataInfo[idx]?.Element_006?.value.Element_000.contentStr.Element_001.contentStr +
                                          setDataInfo[idx]?.Element_006?.value.Element_000.contentStr.Element_002.contentStr
                                      )}
                                    </TooltipTextItem>
                                    <TooltipTextItem>{ReactHTMLParser(setDataInfo[idx]?.Element_008?.value)}</TooltipTextItem>
                                  </>
                                )}
                              </TooltipWrapper>
                            </EqupimentTooltip>
                            <div className={findQuality(setDataInfo[idx]?.Element_001?.value.qualityValue)} style={{ textAlign: "center" }}>
                              {setDataInfo[idx]?.Element_001?.value.qualityValue}
                            </div>
                          </EquipmentItemImageWrapper>
                          {setDataInfo[idx]?.Element_005?.value?.Element_001 && (
                            <ItemNameInfo color={setDataInfo[idx]?.Element_000?.value.substring(31, 38)}>
                              <EquipmentItemTextac>
                                {ReactHTMLParser(JSON.stringify(item?.Name).replaceAll('"', ""))}
                                <br />
                                {setDataInfo[idx]?.Element_005?.value.Element_001.replace("<BR>", " ")}
                                <br />
                              </EquipmentItemTextac>
                              {setDataInfo[idx]?.Element_006?.value.Element_000?.contentStr?.Element_000?.contentStr && (
                                <EquipmentItemTextac>
                                  {ReactHTMLParser(
                                    setDataInfo[idx]?.Element_006?.value.Element_000.contentStr.Element_000.contentStr +
                                      setDataInfo[idx]?.Element_006?.value.Element_000.contentStr.Element_001.contentStr +
                                      setDataInfo[idx]?.Element_006?.value.Element_000.contentStr.Element_002.contentStr
                                  )}
                                </EquipmentItemTextac>
                              )}
                            </ItemNameInfo>
                          )}
                        </EquipmentItem>
                      </>
                    )
                )}
                <EquipmentItem>
                  <EquipmentItemImageWrapper>
                    <EquipmentItemImage src={JSON.stringify(setData[11]?.Icon)?.replaceAll('"', "")} />
                  </EquipmentItemImageWrapper>
                  {setDataInfo[11]?.Element_000?.value && (
                    <ItemNameInfo color={setDataInfo[11]?.Element_000?.value.substring(31, 38)}>
                      <EquipmentItemTextac>
                        {ReactHTMLParser(JSON.stringify(setDataInfo[11]?.Element_000?.value).replaceAll('"', ""))}
                      </EquipmentItemTextac>
                      {setDataInfo[11]?.Element_006?.value.Element_000?.contentStr?.Element_000?.contentStr && (
                        <EquipmentItemTextac>
                          {ReactHTMLParser(
                            setDataInfo[11]?.Element_006?.value.Element_000.contentStr.Element_000.contentStr +
                              setDataInfo[11]?.Element_006?.value.Element_000.contentStr.Element_001.contentStr +
                              setDataInfo[11]?.Element_006?.value.Element_000.contentStr.Element_002.contentStr
                          )}
                        </EquipmentItemTextac>
                      )}
                    </ItemNameInfo>
                  )}
                </EquipmentItem>
              </AreaWrapper>
            </MainWrapper>
            <MainWrapper>
              <CombatWrapper>
                <CombatStat>
                  <CombatStatMainWrapper>
                    <CombatStatMain>
                      <CombatStatMainItem>{statInfo[2]?.Type}</CombatStatMainItem>
                      <CombatStatMainItem>{statInfo[2]?.Value}</CombatStatMainItem>
                    </CombatStatMain>
                    <CombatStatMain>
                      <CombatStatMainItem>{statInfo[3]?.Type}</CombatStatMainItem>
                      <CombatStatMainItem>{statInfo[3]?.Value}</CombatStatMainItem>
                    </CombatStatMain>
                  </CombatStatMainWrapper>
                  <CombatAnotherStat>
                    <CombatAnotherStatItem>특성합</CombatAnotherStatItem>
                    <CombatAnotherStatItem>{parseInt(statInfo[2]?.Value) + parseInt(statInfo[3]?.Value)}</CombatAnotherStatItem>
                  </CombatAnotherStat>
                  <CombatAnotherStat>
                    <CombatAnotherStatItem>공격력</CombatAnotherStatItem>
                    <CombatAnotherStatItem>{statInfo[1]?.Value}</CombatAnotherStatItem>
                  </CombatAnotherStat>
                  <CombatAnotherStat>
                    <CombatAnotherStatItem>최대 생명력</CombatAnotherStatItem>
                    <CombatAnotherStatItem>{statInfo[0]?.Value}</CombatAnotherStatItem>
                  </CombatAnotherStat>
                </CombatStat>
                <Engarving>
                  {infoList?.ArmoryEngraving?.Effects ? (
                    infoList.ArmoryEngraving.Effects.map((item) => (
                      <EngarvigItemWrapper title={item.Description}>
                        <EngarvigItem>{item?.Name.substring(item.Name.length - 1)}</EngarvigItem>
                        <EngarvigItem>
                          {substringToFindSpace(item?.Name)}{" "}
                          {infoList?.ArmoryEngraving.Engravings?.map(
                            (newItem) => substringToFindSpace(item.Name) == newItem?.Name && "(+각인서)"
                          )}
                        </EngarvigItem>
                      </EngarvigItemWrapper>
                    ))
                  ) : (
                    <EngarvigItemWrapper>
                      <EngarvigItem>각인 존재하지 않음</EngarvigItem>
                    </EngarvigItemWrapper>
                  )}
                </Engarving>
              </CombatWrapper>
              <GemAndCard>
                <GemTitle width="60%">보석</GemTitle>
                <GemWrapper>
                  {gem != undefined && gem != null && gem.length != 0 ? (
                    gem.map((item, idx) => (
                      <>
                        <GemItem>
                          <GemImg color={item?.Name?.substring(31, 38)} src={item?.Icon} />
                          <GemTooltip className="tooltip">
                            {ReactHTMLParser(JSON.parse(item.Tooltip)?.Element_000?.value)}
                            {ReactHTMLParser(JSON.parse(item.Tooltip)?.Element_004?.value.Element_001)}
                          </GemTooltip>
                          <GemText>{item?.Level}</GemText>
                        </GemItem>
                      </>
                    ))
                  ) : (
                    <Ssalmuck>쌀먹중</Ssalmuck>
                  )}
                </GemWrapper>
                <GemAndCardTitle width="75%">
                  카드 -{" "}
                  {infoList?.ArmoryCard?.Effects[infoList?.ArmoryCard?.Effects.length - 1].Items[
                    infoList?.ArmoryCard?.Effects[infoList?.ArmoryCard?.Effects.length - 1].Items?.length - 1
                  ].Name
                    ? infoList?.ArmoryCard?.Effects[infoList?.ArmoryCard?.Effects.length - 1].Items[
                        infoList?.ArmoryCard?.Effects[infoList?.ArmoryCard?.Effects.length - 1].Items?.length - 1
                      ].Name
                    : "쌀먹중"}
                </GemAndCardTitle>
                <CardWrapper>
                  {infoList?.ArmoryCard?.Cards != undefined &&
                  infoList?.ArmoryCard?.Cards != null &&
                  infoList?.ArmoryCard?.Cards.length != 0 ? (
                    infoList?.ArmoryCard?.Cards?.map((item, idx) => (
                      <>
                        <CardItemWrapper>
                          <CardItem src={item?.Icon} />
                          <CardItemText>각성 단계 : {item?.AwakeCount} </CardItemText>
                        </CardItemWrapper>
                      </>
                    ))
                  ) : (
                    <Ssalmuck>쌀먹중</Ssalmuck>
                  )}
                </CardWrapper>
              </GemAndCard>
            </MainWrapper>
          </>
        ) : (
          <div>수많은 버그로 인해 3티어 미만의 캐릭터는 검색이 불가능합니다.</div>
        )}
      </InfoWrapper>
    </>
  );
}
