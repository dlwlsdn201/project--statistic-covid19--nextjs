// import type { NextPage } from 'next';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from '../components/Dashboard';
import Seo from '../components/Seo';
import {
	updateConfirmations,
	updateDeaths,
	updateHospitalizations,
	updateSearchDate,
	updateSevereSymptoms,
	updateWeeklyData,
	updateYesterdayData
} from '../store/reducers/dashboard';
import { IPageProps } from '../types/page';
import {
	READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY,
	READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY,
	READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY,
	READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY
	// READ_DOMESTIC_COVID_STATUS_TODAY
} from './api';

const Home = (props: IPageProps): JSX.Element => {
	const dispatch = useDispatch();

	const initData = () => {
		const {
			// covid_status_today,
			covid_deaths_weekly,
			covid_confirmations_weekly,
			covid_severe_symptoms_weekly,
			covid_hospitalizations_weekly
		} = props;
		// const statusData = covid_status_today[0]; // 국내 일일 확진자, 사망자, 중증 발생자, 신규 입원자 현황 데이터
		const weeklyDeathsData = covid_deaths_weekly[0];
		const weeklyConfirmationsData = covid_confirmations_weekly[0];
		const weeklySevereSymptomsData = covid_severe_symptoms_weekly[0];
		const weeklyhospitalizationsData = covid_hospitalizations_weekly[0];

		let updateData;
		if (
			// statusData &&
			weeklyDeathsData &&
			weeklyConfirmationsData &&
			weeklySevereSymptomsData &&
			weeklyhospitalizationsData
		) {
			updateData = {
				// store에 업데이트할 response data
				searchDate: weeklyDeathsData?.mmddhh,
				deaths: {
					count: weeklyDeathsData?.cnt7,
					rate: weeklyDeathsData?.rate7
				},
				hospitalizations: {
					count: weeklyhospitalizationsData?.cnt7,
					rate: weeklyhospitalizationsData?.rate7
				},
				severeSymptoms: {
					count: weeklySevereSymptomsData?.cnt7,
					rate: weeklySevereSymptomsData?.rate7
				},
				confirmations: {
					count: weeklyConfirmationsData?.cnt7,
					rate: weeklyConfirmationsData?.rate7
				},
				yesterday: {
					// 어제일자 데이터
					deaths: {
						// 사망
						count: weeklyDeathsData.cnt6,
						rate: weeklyDeathsData.rate6
					},
					severeSymptoms: {
						// 재원 위중증
						count: weeklySevereSymptomsData.cnt6,
						rate: weeklySevereSymptomsData.rate6
					},
					hospitalizations: {
						// 신규 입원
						count: weeklyhospitalizationsData.cnt6,
						rate: weeklyhospitalizationsData.rate6
					},
					confirmations: {
						count: weeklyConfirmationsData.cnt6,
						rate: weeklyConfirmationsData.rate6
					}
				}
			};
			dispatch(updateSearchDate(updateData?.searchDate));
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
			dispatch(updateYesterdayData(updateData.yesterday));
			dispatch(
				updateWeeklyData({
					deaths: weeklyDeathsData,
					confirmations: weeklyConfirmationsData,
					severeSymptoms: weeklySevereSymptomsData,
					hospitalizations: weeklyhospitalizationsData
				})
			);
		}
	};

	useEffect(() => {
		initData();
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
	let PAYLOAD_DEATHS_WEEKLY;
	let PAYLOAD_CONFIRMATIONS_WEEKLY;
	let PAYLOAD_SEVERE_SYMPTOMS_WEEKLY;
	let PAYLOAD_HOSPITALIZATIONS_WEEKLY;
	await axios
		.all([
			READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY(), // 주간 국내 코로나 신규 확진자 조회 API 호출
			READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY(), // 주간 국내 코로나 사망자 조회 API 호출
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
					if (
						resDeaths &&
						resConfirmations &&
						resSevereSymptons &&
						resHospitalizations
					) {
						PAYLOAD_DEATHS_WEEKLY = resDeaths?.data?.response?.result;
						PAYLOAD_CONFIRMATIONS_WEEKLY =
							resConfirmations?.data?.response?.result;
						PAYLOAD_SEVERE_SYMPTOMS_WEEKLY =
							resSevereSymptons?.data?.response?.result;
						PAYLOAD_HOSPITALIZATIONS_WEEKLY =
							resHospitalizations?.data?.response?.result;
					}
				}
			)
		)
		.catch((reason) => console.log('Occured Error =>', reason));

	return {
		props: {
			covid_deaths_weekly: PAYLOAD_DEATHS_WEEKLY ?? [],
			covid_confirmations_weekly: PAYLOAD_CONFIRMATIONS_WEEKLY ?? [],
			covid_severe_symptoms_weekly: PAYLOAD_SEVERE_SYMPTOMS_WEEKLY ?? [],
			covid_hospitalizations_weekly: PAYLOAD_HOSPITALIZATIONS_WEEKLY ?? []
		}
	};
}
