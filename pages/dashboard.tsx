// import type { NextPage } from 'next';
import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Dashboard from '../components/Dashboard';
import Seo from '../components/Seo';
import {
	loadingFetchData,
	updateConfirmations,
	updateDeaths,
	updateHospitalizations,
	updateSearchDate,
	updateSevereSymptoms,
	updateWeeklyData,
	updateYesterdayData
} from '../store/reducers/dashboard';
import CustomNotification from '../components/Modules/Notification';
import {
	READ_DOMESTIC_COVID_CONFIRMATIONS_OF_WEEKLY,
	READ_DOMESTIC_COVID_DEATHS_OF_WEEKLY,
	READ_DOMESTIC_COVID_HOSPITALIZATIONS_OF_WEEKLY,
	READ_DOMESTIC_COVID_SEVERE_SYMPTOMS_OF_WEEKLY
} from './api';

const Home = (): JSX.Element => {
	const dispatch = useDispatch();
	const dashboardState = useSelector(
		(state: any) => state.dashboard,
		shallowEqual
	);

	const updateData = useCallback(
		(props: any) => {
			const {
				covid_deaths_weekly,
				covid_confirmations_weekly,
				covid_severe_symptoms_weekly,
				covid_hospitalizations_weekly
			} = props;
			const weeklyDeathsData = covid_deaths_weekly[0];
			const weeklyConfirmationsData = covid_confirmations_weekly[0];
			const weeklySevereSymptomsData = covid_severe_symptoms_weekly[0];
			const weeklyhospitalizationsData = covid_hospitalizations_weekly[0];

			let nextData;
			if (
				weeklyDeathsData &&
				weeklyConfirmationsData &&
				weeklySevereSymptomsData &&
				weeklyhospitalizationsData
			) {
				nextData = {
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
				dispatch(
					updateSearchDate(nextData?.searchDate ?? dashboardState?.searchDate)
				);
				dispatch(
					updateSevereSymptoms({
						severeSymptoms:
							nextData.severeSymptoms ?? dashboardState?.severeSymptoms
					})
				);
				dispatch(
					updateHospitalizations({
						hospitalizations:
							nextData.hospitalizations ?? dashboardState?.hospitalizations
					})
				);
				dispatch(
					updateConfirmations({
						confirmations:
							nextData.confirmations ?? dashboardState?.confirmations
					})
				);
				dispatch(
					updateDeaths({ deaths: nextData.deaths ?? dashboardState?.deaths })
				);
				dispatch(
					updateYesterdayData(nextData.yesterday ?? dashboardState?.yesterday)
				);
				dispatch(
					updateWeeklyData({
						deaths: weeklyDeathsData ?? dashboardState?.weekly?.deaths,
						confirmations:
							weeklyConfirmationsData ?? dashboardState?.weekly?.confirmations,
						severeSymptoms:
							weeklySevereSymptomsData ??
							dashboardState?.weekly?.severeSymptoms,
						hospitalizations:
							weeklyhospitalizationsData ??
							dashboardState?.weekly?.hospitalizations
					})
				);
			}
		},
		[
			dashboardState?.confirmations,
			dashboardState?.deaths,
			dashboardState?.hospitalizations,
			dashboardState?.searchDate,
			dashboardState?.severeSymptoms,
			dashboardState?.weekly?.confirmations,
			dashboardState?.weekly?.deaths,
			dashboardState?.weekly?.hospitalizations,
			dashboardState?.weekly?.severeSymptoms,
			dashboardState?.yesterday,
			dispatch
		]
	);

	useEffect(() => {
		// fetch covid statistic data
		const initData = async () => {
			let PAYLOAD_DEATHS_WEEKLY: Array<any>;
			let PAYLOAD_CONFIRMATIONS_WEEKLY: Array<any>;
			let PAYLOAD_SEVERE_SYMPTOMS_WEEKLY: Array<any>;
			let PAYLOAD_HOSPITALIZATIONS_WEEKLY: Array<any>;
			try {
				dispatch(loadingFetchData(true));
				const res = await axios
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
								return {
									covid_deaths_weekly: PAYLOAD_DEATHS_WEEKLY ?? [],
									covid_confirmations_weekly:
										PAYLOAD_CONFIRMATIONS_WEEKLY ?? [],
									covid_severe_symptoms_weekly:
										PAYLOAD_SEVERE_SYMPTOMS_WEEKLY ?? [],
									covid_hospitalizations_weekly:
										PAYLOAD_HOSPITALIZATIONS_WEEKLY ?? []
								};
							}
						)
					);
				updateData(res); // fetch data을 store에 업데이트
				dispatch(loadingFetchData(false));
			} catch (error: any) {
				dispatch(loadingFetchData(false));
				CustomNotification({ isData: false, errorMsg: error?.code });
				console.log('Occured Error =>', error);
			}
		};
		initData();
	}, []);

	return (
		<>
			<Seo title='국내 Covid-19 통계 현황 대시보드' />
			<Dashboard />
		</>
	);
};

export default Home;
