import dayjs from 'dayjs';
import React from 'react';
import Refresh from '../Modules/Refresh';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import dashboard, {
	loadingFetchData,
	updateConfirmations,
	updateDeaths,
	updateHospitalizations,
	updateSearchDate,
	updateSevereSymptoms,
	updateWeeklyData,
	updateYesterdayData
} from '../../store/reducers/dashboard';
import { getRefreshData } from '../Dashboard/Handlers';

const Header = () => {
	const nowTime = dayjs().format('YYYY-MM-DD HH시mm분ss초');
	const dispatch = useDispatch();
	const dashboardState = useSelector(
		(state: any) => state.dashboard,
		shallowEqual
	);
	const dispatchRefreshData = (props: any) => {
		const {
			covid_deaths_weekly,
			covid_confirmations_weekly,
			covid_severe_symptoms_weekly,
			covid_hospitalizations_weekly
		} = props || [];
		if (
			covid_deaths_weekly &&
			covid_confirmations_weekly &&
			covid_severe_symptoms_weekly &&
			covid_hospitalizations_weekly
		) {
			// const statusData = covid_status_today[0]; // 국내 일일 확진자, 사망자, 중증 발생자, 신규 입원자 현황 데이터
			const weeklyDeathsData = covid_deaths_weekly[0];
			const weeklyConfirmationsData = covid_confirmations_weekly[0];
			const weeklySevereSymptomsData = covid_severe_symptoms_weekly[0];
			const weeklyhospitalizationsData = covid_hospitalizations_weekly[0];

			let updateData;
			if (
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
				dispatch(
					updateSearchDate(updateData?.searchDate ?? dashboardState?.searchDate)
				);
				dispatch(
					updateSevereSymptoms({
						severeSymptoms:
							updateData.severeSymptoms ?? dashboardState?.severeSymptoms
					})
				);
				dispatch(
					updateHospitalizations({
						hospitalizations:
							updateData.hospitalizations ?? dashboardState?.hospitalizations
					})
				);
				dispatch(
					updateConfirmations({
						confirmations:
							updateData.confirmations ?? dashboardState?.confirmations
					})
				);
				dispatch(
					updateDeaths({
						deaths: updateData.deaths ?? dashboardState?.deaths
					})
				);
				dispatch(
					updateYesterdayData(updateData.yesterday ?? dashboardState?.yesterday)
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
				console.log('dispatch 완료');
			}
		} else {
			console.log('invalid data');
		}
	};

	const updateData = () => {
		dispatch(loadingFetchData(true));
		getRefreshData().then((newData) => dispatchRefreshData(newData));
		dispatch(loadingFetchData(false));
	};

	const { loading } = dashboardState;
	return (
		<div className='header-container'>
			<strong className='header-title'>국내 COVID19 현황 대시보드</strong>
			<span className='lookup-time'>{`(${nowTime} 기준 조회)`}</span>
			<Refresh spin={loading} size={'1.2em'} onClick={() => updateData()} />
		</div>
	);
};

export default Header;
