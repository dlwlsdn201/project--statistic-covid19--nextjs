import CustomNotification from '@components/Modules/Notification';
import axios from 'axios';
import {
	READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY,
	READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY,
	READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY,
	READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY
} from '../../pages/api';

type TWeeklyDataObj = {
	[key: string]: string;
};

/**
 *
 * @param todayValue 오늘일자 데이터
 * @param yesterdayValue 어제일자 데이터
 * @returns 전일대비 증감률 (%)
 */
export const calcRateOfDayToDay = (
	todayValue: number,
	yesterdayValue: number
) =>
	Number((((todayValue - yesterdayValue) / yesterdayValue) * 100).toFixed(1));

/**
 *
 * @param dataObj 주간 현황 데이터 Obj
 * @param searchDate 검색 날짜
 * @returns
 */
export const getChartData = (
	dataObj: TWeeklyDataObj
	// searchDate: string | number
) => {
	const sortDataList = (prevList: Array<string>) =>
		prevList.sort(
			(a: string, b: string) => Number(a.slice(-1)) - Number(b.slice(-1))
		);

	let result = [];
	const cntArray =
		dataObj &&
		Object.keys(dataObj).filter(
			(item) => item.includes('cnt') && !item.includes('8')
		); // 인원 수 key 배열
	const rateArray =
		dataObj &&
		Object.keys(dataObj).filter(
			(item) => item.includes('rate') && !item.includes('8')
		); // 비율 현황 key 배열
	const dateArray =
		dataObj &&
		Object.keys(dataObj).filter(
			(item) =>
				item.includes('mmdd') && !item.includes('8') && item !== 'mmddhh'
		); //  날짜 key 배열

	const sorted = {
		cntArray: sortDataList(cntArray),
		rateArray: sortDataList(rateArray),
		dateArray: sortDataList(dateArray)
	};

	result =
		sorted?.cntArray &&
		sorted?.cntArray.map((key: string, index: any) => ({
			datetime: dataObj[`mmdd${index + 1}`],
			value: Number(dataObj[key])
		}));

	return result;
};

export const getRefreshData = async () => {
	let result = {};
	await axios
		.all([
			READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY(), // 주간 국내 코로나 사망자 조회 API 호출
			READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY(), // 주간 국내 코로나 신규 확진자 조회 API 호출
			READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY(), // 주간 국내 코로나 위중증자 조회 API 호출
			READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY() // 주간 국내 코로나 신규 입원자 조회 API 호출
		])
		.then(
			axios.spread(
				(
					resDeaths,
					resConfirmations,
					resSevereSymptons,
					resHospitalizations
				) => {
					// 공공데이터포털 REST API 에 에러 이슈가 있음 _ 09.24 ~ ing (해결될 떄까지 테스트 데이터 사용)
					let PAYLOAD_DEATHS_WEEKLY; // 주간 총  사망자 수
					let PAYLOAD_CONFIRMATIONS_WEEKLY; // 주간 총  확진자 수
					let PAYLOAD_SEVERE_SYMPTOMS_WEEKLY; // 주간 위중증 발생 수
					let PAYLOAD_HOSPITALIZATIONS_WEEKLY; // 주간 신규입원 수
					if (
						resDeaths.status === 200 &&
						resDeaths.data?.response?.result.length > 0 &&
						resConfirmations.status === 200 &&
						resConfirmations.data?.response?.result.length > 0 &&
						resSevereSymptons.status === 200 &&
						resSevereSymptons.data?.response?.result.length > 0 &&
						resHospitalizations.status === 200 &&
						resHospitalizations.data?.response?.result.length > 0
					) {
						PAYLOAD_DEATHS_WEEKLY = resDeaths?.data?.response?.result;
						PAYLOAD_CONFIRMATIONS_WEEKLY =
							resConfirmations?.data?.response?.result;
						PAYLOAD_SEVERE_SYMPTOMS_WEEKLY =
							resSevereSymptons?.data?.response?.result;
						PAYLOAD_HOSPITALIZATIONS_WEEKLY =
							resHospitalizations?.data?.response?.result;

						// API 정상 응답 Message 알림 코드 위치
						CustomNotification({ isData: true }); // 성공 메세지
					} else if (
						(resDeaths.status === 200 &&
							!resDeaths.data?.response &&
							typeof resDeaths.data === 'string') ||
						(resConfirmations.status === 200 &&
							!resConfirmations.data?.response &&
							typeof resConfirmations.data === 'string') ||
						(resSevereSymptons.status === 200 &&
							!resSevereSymptons.data?.response &&
							typeof resSevereSymptons.data === 'string') ||
						(resHospitalizations.status === 200 &&
							!resHospitalizations.data?.response &&
							typeof resHospitalizations.data === 'string')
					) {
						// 일일 조회 횟수 초과 안내 메세지
						CustomNotification({
							isData: false,
							resultCode: 22,
							errorMsg:
								'일일 조회 가능한 횟수를 초과하였습니다. 내일 다시 조회해주세요.'
						});
					}

					result = {
						covid_deaths_weekly: PAYLOAD_DEATHS_WEEKLY ?? [],
						covid_confirmations_weekly: PAYLOAD_CONFIRMATIONS_WEEKLY ?? [],
						covid_severe_symptoms_weekly: PAYLOAD_SEVERE_SYMPTOMS_WEEKLY ?? [],
						covid_hospitalizations_weekly: PAYLOAD_HOSPITALIZATIONS_WEEKLY ?? []
					};
				}
			)
		)
		.catch((error) => {
			// 에러 Message 알림 코드 위치
			CustomNotification({ isData: false, errorMsg: error?.code });
			console.log('Occured Error =>', error);
		});
	return result;
};
