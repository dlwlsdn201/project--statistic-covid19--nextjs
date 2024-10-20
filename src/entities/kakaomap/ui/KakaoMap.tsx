"use client";

import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
import useKakaoLoader from "../hooks/useKakaoLoader";

const centerLocationInDomestic = [35.760795638486, 127.98160897107];

export const KakaoMap = () => {
  useKakaoLoader();

  return (
    <Map // 지도를 표시할 Container
      id='map'
      center={{
        // 지도의 중심좌표
        lat: centerLocationInDomestic[0],
        lng: centerLocationInDomestic[1],
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100%",
      }}
      level={12} // 지도의 확대 레벨
    >
      {/* Controls */}
      <ZoomControl position='TOPRIGHT' />
    </Map>
  );
};
