import styled from "@emotion/styled";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px auto 0;
  box-sizing: border-box;
  color: var(--normal-color);
  .sp {
    flex-grow: 1;
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  .sp {
    flex-grow: 1;
  }
`;
export const AreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 10px;
  box-sizing: border-box;
`;

export const Nickname = styled.div`
  margin-bottom: 10px;
  font-size: ${(props) => props.fontSize || "1.3rem"};
`;

export const LevelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
`;
export const LevelItem = styled.div``;
export const LevelTitle = styled.div`
  padding: 5px 0;
  color: var(--darker-color);
`;
export const LevelText = styled.div`
  color: var(--bold-color);
`;
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 40px;
`;
export const ProfileItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const ProfileTitle = styled.div`
  width: 3rem;
  margin-right: 20px;
  padding: 5px;
  border-radius: 10px;
  background: var(--area-color);
  color: var(--bold-color);
  font-size: 1.1rem;
  text-align: center;
`;
export const ProfileText = styled.div`
  color: var(--normal-color);
`;
export const EquipmentItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
export const EquipmentItemText = styled.div`
  padding-right: 5px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;
export const EquipmentItemTextac = styled.div`
  width: 180px;
  padding-right: 5px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;
export const EquipmentItemImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 10%;
  margin-bottom: 5px;
  margin-right: 5px;
  color: var(--bold-color);
  box-sizing: border-box;
  div {
    border-radius: 0 0 20% 20%;
    box-sizing: border-box;
  }
  div.one {
    background: #c00000;
  }
  div.two {
    background: #ffc000;
  }
  div.three {
    background: #70ad47;
  }
  div.four {
    background: #4472c4;
  }
  div.five {
    background: #7030a0;
  }
`;
export const EquipmentItemImage = styled.img`
  width: 100%;
  margin-right: 5px;
  border-radius: 15% 15% 0 0;
  box-sizing: border-box;

  background: ${(props) => "linear-gradient(to bottom right, #ffffff," + props.color + ")" || "#ffffff"};

  &:hover + .tooltip {
    display: block;
  }
`;

export const EqupimentTooltip = styled.div`
  display: none;
  position: absolute;
  z-index: 100;
  left: 150px;
  width: 290px;
  background: var(--area-color);
  border-radius: 0 !important;
  font-size: 1rem;
  div {
    border-radius: 0 !important;
  }
  font {
    font-size: 1rem;
  }
`;
export const TooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    padding: 5px 0;
  }
`;
export const TooltipMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${(props) => "linear-gradient(to bottom left, #000000 60%," + props.color + ")"};
`;
export const TooltipMainImg = styled.img`
  width: 20%;
  margin: 5px;
  box-sizing: border-box;
`;
export const TooltipMainText = styled.div`
  width: 80%;
  margin: 5px;
  box-sizing: border-box;
`;
export const TooltipMainTextItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin: 2px;
  box-sizing: border-box;
`;
export const TooltipTextItem = styled.div`
  margin: 0 10px;
  color: ${(props) => props.color};
  box-sizing: border-box;
  &:nth-of-type(0) {
    margin-top: none;
  }
  font {
    text-align: ${(props) => props.align || "left"};
    line-height: 0.8em;
  }
`;
export const ItemNameInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  color: ${(props) => props.color};
`;
export const CombatWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
`;
export const CombatStat = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  padding: 5px;
  border-radius: 10px;
  background: var(--area-color);
  box-sizing: border-box;
`;
export const CombatStatMainWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 10px;
  justify-content: space-around;
  flex-direction: row;
`;
export const CombatStatMain = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CombatStatMainItem = styled.div`
  padding: 2px;
  color: var(--bold-color);
  &:nth-of-type(2) {
    font-size: 1.15rem;
  }
`;
export const CombatAnotherStat = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CombatAnotherStatItem = styled.div`
  width: 50%;
  padding: 5px;
  text-align: center;
  box-sizing: border-box;
  &:nth-of-type(1) {
    color: var(--bold-color);
  }
`;
export const Engarving = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 10px auto;
  padding: 5px;
  border-radius: 10px;
  background: var(--area-color);
  box-sizing: border-box;
`;
export const EngarvigItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const EngarvigItem = styled.div`
  width: 20%;
  padding: 5px;
  text-align: center;
  box-sizing: border-box;
  color: var(--bold-color);

  &:nth-of-type(2) {
    flex-grow: 1;
  }
`;
export const GemAndCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GemAndCardTitle = styled.div`
  width: 90%;
  padding: 10px;
  text-align: center;
  font-size: 1.4rem;
  color: var(--bold-color);
  box-sizing: border-box;
`;
export const GemTitle = styled(GemAndCardTitle)`
  width: 66%;
`;
export const GemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const GemItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 5px;
  width: 6%;
  box-sizing: border-box;
  &:hover > .tooltip {
    display: block;
  }
`;
export const GemImg = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
  background: ${(props) => "linear-gradient(to bottom right, #ffffff," + props.color + ")" || "#ffffff"};
`;
export const GemText = styled.div`
  border-radius: 0 0 5px 5px;
  background: var(--area-color);
  text-align: center;
`;
export const GemTooltip = styled.div`
  display: none;
  position: absolute;
  z-index: 100;
  left: 100px;
  width: 250px;
  padding: 5px;
  background: var(--area-color);
  border-radius: 0 !important;
  font-size: 1rem;
  text-align: center;
`;
export const Ssalmuck = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.1rem;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const CardItemWrapper = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
`;
export const CardItem = styled.img`
  width: 100%;
`;
export const CardItemText = styled.div`
  width: 100%;
  padding: 5px;
  text-align: center;
  box-sizing: border-box;
`;
