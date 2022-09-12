import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import Seo from '../components/Seo';
import styles from '../styles/Home.module.css';
import { READ_DOMESTIC_COVID_STATUS } from './api';
const Home: NextPage = (props) => {
	console.log('Home 렌더링');

	useEffect(() => {
		// const { data } = props;

		console.log('API data:', props);
	}, []);
	return (
		<>
			<Seo title='대시보드' />
			<div> 대시보드 페이지 </div>
			{/* <Dashboard /> */}
		</>
	);
};

export default Home;

// SSR 적용
export async function getServerSideProps() {
	let API_DATA;
	const api = await READ_DOMESTIC_COVID_STATUS();
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
