export function loginWithKakao() {
  console.log("hi", window.Kakao);
  if (window.Kakao) {
    console.log(process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL, "-checking-=");
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL,
    });
  } else {
    console.error("Kakao SDK is not initialized");
  }
}
