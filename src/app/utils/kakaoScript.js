"use client";
import Script from "next/script";

export default function KakaoScript() {
  const handleKakaoInit = () => {
    if (window.Kakao) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
      console.log("Kakao SDK 초기화 완료");
    } else {
      console.error("Kakao SDK 초기화 실패: Kakao 객체를 찾을 수 없습니다.");
    }
  };

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
      integrity="sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Hs90nka"
      crossOrigin="anonymous"
      strategy="afterInteractive" // 페이지가 상호작용 가능한 상태 이후 로드
      onLoad={handleKakaoInit} // 로드 후 Kakao 초기화
    />
  );
}
