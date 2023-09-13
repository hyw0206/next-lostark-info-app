import { Wrapper, Body, Aside, Main, Footer } from "../styles/styled/index";
import Event from "./components/Event";
import Notice from "./components/Notice";
import Calendar from "./components/Calendar";
import Input from "./components/Input";
import ErrorBoundary from "./ErrorBoundary";
export default function Home() {
  return (
    <ErrorBoundary>
      <Wrapper>
        <Body>
          <Aside>
            <Event />
          </Aside>
          <Main>
            <Input />
            <Calendar />
          </Main>
          <Aside>
            <Notice />
          </Aside>
        </Body>
        <Footer>
          해당 사이트는 눈누에서 제공하는 무료 폰트인 경기천년바탕체를 사용하여 제작되었습니다. <br />
          사용 기술 : Next (React), axios, scss, styled-components, LostArk OpenAPI <br />
          문의 : hyw0206s@naver.com <br />
          Copyright 2023. hyw0206s all rights reserved.
        </Footer>
      </Wrapper>
    </ErrorBoundary>
  );
}
