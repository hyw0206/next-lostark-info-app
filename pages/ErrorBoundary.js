import { Component } from "react";
import { ErrorWrapper } from "../styles/styled/error";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorinfo: "" };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.state.errorinfo = error;
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorWrapper>
          <h2>에러가 발생했습니다. 레벨이 너무 낮거나 장비를 착용하지 않은 캐릭터, 생성 후 접속하지 않은 캐릭터에 접근할 수 없습니다.</h2>
          <h3>만일 다른 상황이라면 에러 발생 상황과 내용을 아래 이메일로 보내주세요.</h3>
          <p>hyw0206s@naver.com</p>
        </ErrorWrapper>
      );
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
