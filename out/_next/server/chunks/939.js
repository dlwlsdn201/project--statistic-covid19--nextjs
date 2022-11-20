"use strict";
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY": () => (/* binding */ READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY),
  "READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY": () => (/* binding */ READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY),
  "READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY": () => (/* binding */ READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY),
  "READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY": () => (/* binding */ READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/constants.js
const API_URL = 'https://apis.data.go.kr';
const API_TIMEOUT = 15000;
;// CONCATENATED MODULE: ./pages/api/index.js

 // 데이터 무결성 이슈로 인해 사용 안함
// export const READ_DOMESTIC_COVID_STATUS_TODAY = () =>
// 	axios({
// 		method: 'GET',
// 		baseURL: API_URL,
// 		timeout: API_TIMEOUT,
// 		url: `/1790387/covid19CurrentStatusKorea/covid19CurrentStatusKoreaJason`,
// 		params: {
// 			serviceKey: decodeURIComponent(process.env.API_KEY)
// 		}
// 	});
// 주간 국내 신규 확진자 현황 데이터 조회

const READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY = () => external_axios_default()({
  method: 'GET',
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  url: `/1790387/covid19CurrentStatusConfirmations/covid19CurrentStatusConfirmationsJson`,
  params: {
    serviceKey: // decodeURIComponent(process.env.API_KEY) ??
    decodeURIComponent('KOmVWhRTLJbltSjetYWBfguGDSkRw3U2mROGLgYPMO896f1xSChfUfTIo%2BLAI1uW1uRA8AiGUZE%2Fo4Os3uXBbw%3D%3D')
  }
}); // 주간 국내 사망자 현황 데이터 조회

const READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY = () => external_axios_default()({
  method: 'GET',
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  url: `/1790387/covid19CurrentStatusDeaths/covid19CurrentStatusDeathsJson`,
  params: {
    serviceKey: // decodeURIComponent(process.env.API_KEY) ??
    decodeURIComponent('KOmVWhRTLJbltSjetYWBfguGDSkRw3U2mROGLgYPMO896f1xSChfUfTIo%2BLAI1uW1uRA8AiGUZE%2Fo4Os3uXBbw%3D%3D')
  }
}); // 주간 국내 재원위중증 현황 데이터 조회

const READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY = () => external_axios_default()({
  method: 'GET',
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  url: `/1790387/covid19CurrentStatusSevereSymptoms/covid19CurrentStatusSevereSymptomsJson`,
  params: {
    serviceKey: // decodeURIComponent(process.env.API_KEY) ??
    decodeURIComponent('KOmVWhRTLJbltSjetYWBfguGDSkRw3U2mROGLgYPMO896f1xSChfUfTIo%2BLAI1uW1uRA8AiGUZE%2Fo4Os3uXBbw%3D%3D')
  }
}); // 주간 국내 신규 입원 현황 데이터 조회

const READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY = () => external_axios_default()({
  method: 'GET',
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  url: `/1790387/covid19CurrentStatusHospitalizations/covid19CurrentStatusHospitalizationsJson`,
  params: {
    serviceKey: // decodeURIComponent(process.env.API_KEY) ??
    decodeURIComponent('KOmVWhRTLJbltSjetYWBfguGDSkRw3U2mROGLgYPMO896f1xSChfUfTIo%2BLAI1uW1uRA8AiGUZE%2Fo4Os3uXBbw%3D%3D')
  }
}); // 보건복지부_ 특정 일자 기준 코로나 19 감영현황 총괄 총계
// export const READ_COVID_STATUS_DAY = (data) =>
// 	axios({
// 		method: 'GET',
// 		baseURL: API_URL,
// 		timeout: API_TIMEOUT,
// 		url: `/1352000/ODMS_COVID_02/callCovid02Api`,
// 		params: {
// 			serviceKey: decodeURIComponent(process.env.API_KEY),
// 			pageNo: data.pageNo, // 페이지 번호
// 			numOfRows: data.numOfRows, // 한 페이지 결과 수
// 			apiType: data.apiType, // 데이터 유형 (xml/json)
// 			status_dt: data.statusDate // 특정일자 (20200405)
// 		}
// 	});

/***/ })

};
;