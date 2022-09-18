// import type { NextPage } from 'next';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from '../components/Dashboard';
import Seo from '../components/Seo';
import { getBeforeDate, getToday } from '../lib/Date';
import {
	updateConfirmations,
	updateDeaths,
	updateHospitalizations,
	updateSearchDate,
	updateSevereSymptoms
} from '../store/reducers/dashboard';
import { IPageProps } from '../types/page';
import {
	READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY,
	READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY,
	READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY,
	READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY,
	READ_DOMESTIC_COVID_STATUS_TODAY
} from './api';

const Home = (props: IPageProps): JSX.Element => {
	const dispatch = useDispatch();
	console.log('Home 렌더링');

	const initData = () => {
		const { covid_status_today } = props;
		const responseData = covid_status_today[0]; // 국내 일일 확진자, 사망자, 중증 발생자, 신규 입원자 현황 데이터
		let updateData;
		if (responseData) {
			const {
				mmddhh,
				cnt_deaths,
				cnt_hospitalizations,
				cnt_severe_symptoms,
				cnt_confirmations,
				rate_confirmations,
				rate_deaths,
				rate_hospitalizations,
				rate_severe_symptoms
			} = responseData;

			updateData = {
				// store에 업데이트할 response data
				searchDate: mmddhh,
				deaths: {
					count: cnt_deaths,
					rate: rate_deaths
				},
				hospitalizations: {
					count: cnt_hospitalizations,
					rate: rate_hospitalizations
				},
				severeSymptoms: {
					count: cnt_severe_symptoms,
					rate: rate_severe_symptoms
				},
				confirmations: {
					count: cnt_confirmations,
					rate: rate_confirmations
				}
			};
			dispatch(updateSearchDate(mmddhh));
			dispatch(
				updateSevereSymptoms({ severeSymptoms: updateData.severeSymptoms })
			);
			dispatch(
				updateHospitalizations({
					hospitalizations: updateData.hospitalizations
				})
			);
			dispatch(
				updateConfirmations({ confirmations: updateData.confirmations })
			);
			dispatch(updateDeaths({ deaths: updateData.deaths }));
		}
	};

	useEffect(() => {
		initData();

		async () => {
			const APIDayStatus = await READ_COVID_STATUS_DAY({
				pageNo: 1,
				numOfRows: 100,
				apiType: 'json',
				statusDate: getToday('YYYYMMDD')
			});

			console.log('APIDayStatus:', APIDayStatus);
		};
	}, []);
	return (
		<>
			<Seo title='대시보드' />
			{/* <div> 대시보드 페이지 </div> */}
			<Dashboard />
		</>
	);
};

export default Home;

// SSR 적용
export async function getServerSideProps() {
	let PAYLOAD_STATUS_TODAY;
	let PAYLOAD_CONFIRMATIONS;
	let PAYLOAD_DEATHS_WEEKLY;
	let PAYLOAD_CONFIRMATIONS_WEEKLY;
	let PAYLOAD_SEVERE_SYMPTOMS_WEEKLY;
	let PAYLOAD_HOSPITALIZATIONS_WEEKLY;

	await axios
		.all([
			READ_DOMESTIC_COVID_STATUS_TODAY(), // 일일 국내 코로나 현황 조회 API 호출
			READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY(), // 주간 국내 코로나 신규 확진자 조회 API 호출
			READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY(), // 주간 국내 코로나 사망자 조회 API 호출
			READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY(), // 주간 국내 코로나 위중증자 조회 API 호출
			READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY() // 주간 국내 코로나 신규 입원자 조회 API 호출
		])
		.then(
			axios.spread(
				(
					resStatusToday,
					resDeaths,
					resConfirmations,
					resSevereSymptons,
					resHospitalizations
				) => {
					PAYLOAD_STATUS_TODAY = resStatusToday?.data?.response?.result;
					// PAYLOAD_CONFIRMATIONS =
					//   APIconfirmationsWeekly?.data?.response?.result;
					PAYLOAD_DEATHS_WEEKLY = resDeaths?.data?.response?.result;
					PAYLOAD_CONFIRMATIONS_WEEKLY =
						resConfirmations?.data?.response?.result;
					PAYLOAD_SEVERE_SYMPTOMS_WEEKLY =
						resSevereSymptons?.data?.response?.result;
					PAYLOAD_HOSPITALIZATIONS_WEEKLY =
						resHospitalizations?.data?.response?.result;
				}
			)
		)
		.catch((reason) => console.log('Occured Error =>', reason));

	return {
		props: {
			covid_status_today: PAYLOAD_STATUS_TODAY ?? [],
			covid_deaths_weekly: PAYLOAD_DEATHS_WEEKLY ?? [],
			covid_confirmations_weekly: PAYLOAD_CONFIRMATIONS_WEEKLY ?? [],
			covid_severe_symptoms_weekly: PAYLOAD_SEVERE_SYMPTOMS_WEEKLY ?? [],
			covid_hospitalizations_weekly: PAYLOAD_HOSPITALIZATIONS_WEEKLY ?? []
		}
	};
}
