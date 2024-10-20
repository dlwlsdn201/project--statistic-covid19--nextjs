import { useEffect, useState } from "react";
import { MarkerClusterer, MapMarker } from "react-kakao-maps-sdk";

interface Position {
  lat: number;
  lng: number;
}

export const useKakaoCluster = (responseData: Position[]) => {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    setPositions(responseData);
  }, []);

  const clusterContent = (
    <MarkerClusterer
      averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel={10} // 클러스터 할 최소 지도 레벨
    >
      {positions?.map((pos) => (
        <MapMarker
          key={`${pos.lat}-${pos.lng}`}
          position={{
            lat: pos.lat,
            lng: pos.lng,
          }}
        />
      ))}
    </MarkerClusterer>
  );

  return { clusterContent, positions, setPositions };
};
