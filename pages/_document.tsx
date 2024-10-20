import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* 페이지 제목/아이콘 */}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src='//dapi.kakao.com/v2/maps/sdk.js?appkey=c233db6778ce5c0c9d4604bf7e407ee5&autoload=false'
          strategy='lazyOnload'
        ></Script>
      </body>
    </Html>
  );
}
