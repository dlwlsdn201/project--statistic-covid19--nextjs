// import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from '../components/Dashboard';
import Seo from '../components/Seo';
import {
	updateConfirmations,
	updateDeaths,
	updateHospitalizations,
	updateSearchDate,
	updateSevereSymptoms
} from '../store/reducers/dashboard';
import { IPageProps } from '../types/page';
import { READ_DOMESTIC_COVID_STATUS } from './api';

const Home = (props: IPageProps): JSX.Element => {
	const dispatch = useDispatch();
	console.log('Home 렌더링');

	const initData = () => {
		const { payload } = props;
		const responseData = payload[0];
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
			console.log('여기');
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
	let API_DATA;
	const api = await READ_DOMESTIC_COVID_STATUS(); // 일일 코로나 현황 조회 API 호출
	if (api.status >= 200 && api.status < 300) {
		API_DATA = api?.data?.response?.result;
	}
	try {
	} catch (e) {
		console.log('Error:', e);
	}

	return {
		props: {
			payload: API_DATA
		}
	};
}
