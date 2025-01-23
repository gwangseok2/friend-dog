"use client";

import { loginWithKakao } from "@/app/utils/kakaoLogin"; // 유틸 함수 임포트

export default function KakaoLoginButton() {
  return (
    <a id="kakao-login-btn" onClick={loginWithKakao}>
      <img
        src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
        width={222}
        alt="카카오 로그인 버튼"
      />
    </a>
  );
}
