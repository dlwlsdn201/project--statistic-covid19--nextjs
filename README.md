# 국내 주간/일간 코로나19 종합 현황 대시보드  
---
> ## 미리보기
  ![image](https://user-images.githubusercontent.com/53039583/204124046-c596df5d-ae5d-45b4-9f3b-fffc6e964ac9.png)

> ## 개발 환경
- Next.JS 
- react-redux
- css
- Typesript
- ant design
- material UI

> ## 내용
### UI
- 당일 통계 현황 제공
- 주간 현황 차트 제공 (확진자 수, 사망자 수)
- 데이터 갱신 버튼 제공
- 데이터 출처 링크 연결 제공
- 데이터 로드 결과에 따른 알림 UI 구현
- 일일 조회 API 호출 가능 횟수 초과 시, 알림 UI 구현 (공공데이터 포털 open API의 일일 트래픽: 100)
### Data
- 국내 코로나 발생현황 open API 연동(from.공공데이터포털) 
- react-redux 상태 관리 방식을 이용
- 초기 데이터를 CSR 방식으로 로드

### 스타일
- 사이트 테마 컬러, 폰트 등 전역적 스타일 요소는 `./config.js` 스크립트 파일에서 관리.  

> ## 작업 기간
- 22.09.24 ~ 22.11.27 (약 두 달)

> ## 직접 둘러보기
<a href="https://dlwlsdn201.github.io/project--statistic-covid19--nextjs/">사이트 바로가기</a>