import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Dashboard from '../components/Dashboard';
import Seo from '../components/Seo';
import styles from '../styles/Home.module.css';
const Home: NextPage = () => {
	console.log('Home 렌더링');
	return (
		<>
			<Seo title='대시보드' />

			<Dashboard />
		</>
	);
};

export default Home;
