import axios from 'axios';
import { API_TIMEOUT, API_URL } from '../../components/constants';

export const READ_DOMESTIC_COVID_STATUS_TODAY = () =>
	axios({
		method: 'GET',
		baseURL: API_URL,
		timeout: API_TIMEOUT,
		url: `/1790387/covid19CurrentStatusKorea/covid19CurrentStatusKoreaJason`,
		params: {
			serviceKey: decodeURIComponent(process.env.API_KEY)
		}
	});

// 주간 국내 신규 확진자 현황 데이터 조회
export const READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY = () =>
	axios({
		method: 'GET',
		baseURL: API_URL,
		timeout: API_TIMEOUT,
		url: `/1790387/covid19CurrentStatusConfirmations/covid19CurrentStatusConfirmationsJson`,
		params: {
			serviceKey: decodeURIComponent(process.env.API_KEY)
		}
	});

// 주간 국내 사망자 현황 데이터 조회
export const READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY = () =>
	axios({
		method: 'GET',
		baseURL: API_URL,
		timeout: API_TIMEOUT,
		url: `/1790387/covid19CurrentStatusDeaths/covid19CurrentStatusDeathsJson`,
		params: {
			serviceKey: decodeURIComponent(process.env.API_KEY)
		}
	});

// 주간 국내 재원위중증 현황 데이터 조회
export const READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY = () =>
	axios({
		method: 'GET',
		baseURL: API_URL,
		timeout: API_TIMEOUT,
		url: `/1790387/covid19CurrentStatusSevereSymptoms/covid19CurrentStatusSevereSymptomsJson`,
		params: {
			serviceKey: decodeURIComponent(process.env.API_KEY)
		}
	});

// 주간 국내 신규 입원 현황 데이터 조회
export const READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY = () =>
	axios({
		method: 'GET',
		baseURL: API_URL,
		timeout: API_TIMEOUT,
		url: `/1790387/covid19CurrentStatusHospitalizations/covid19CurrentStatusHospitalizationsJson`,
		params: {
			serviceKey: decodeURIComponent(process.env.API_KEY)
		}
	});

// 보건복지부_ 특정 일자 기준 코로나 19 감영현황 총괄 총계
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
